#!/usr/bin/env node
// Validate public/registry.json against the schema documented in
// CONTRIBUTING.md. This repo has no build step (it's a static site deployed
// as-is), so this is the closest thing to a CI gate on submissions/edits —
// run it before opening a PR and in the deploy workflow.

import { readFileSync } from "node:fs";
import { join } from "node:path";

const path = join(process.cwd(), "public", "registry.json");
let raw;
try {
  raw = readFileSync(path, "utf8");
} catch (e) {
  console.error(`error: can't read ${path}: ${e.message}`);
  process.exit(1);
}

let reg;
try {
  reg = JSON.parse(raw);
} catch (e) {
  console.error(`error: ${path} is not valid JSON: ${e.message}`);
  process.exit(1);
}

const errors = [];
const KEBAB = /^[a-z][a-z0-9-]*$/;
const HEX = /^#[0-9A-Fa-f]{3,8}$/;

function requireString(entry, field, where) {
  if (typeof entry[field] !== "string" || entry[field].trim() === "") {
    errors.push(`${where}: missing or empty "${field}"`);
  }
}

if (typeof reg.schemaVersion !== "number") {
  errors.push(`root: missing numeric "schemaVersion"`);
}
if (!Array.isArray(reg.themes)) errors.push(`root: "themes" must be an array`);
if (!Array.isArray(reg.templates)) errors.push(`root: "templates" must be an array`);

const seenThemeIds = new Set();
for (const [i, t] of (reg.themes || []).entries()) {
  const where = `themes[${i}]${t.id ? ` (${t.id})` : ""}`;
  for (const field of ["id", "name", "author", "description", "fonts", "source", "install"]) {
    requireString(t, field, where);
  }
  if (typeof t.id === "string") {
    if (!KEBAB.test(t.id)) errors.push(`${where}: "id" must be kebab-case`);
    if (seenThemeIds.has(t.id)) errors.push(`${where}: duplicate theme id`);
    seenThemeIds.add(t.id);
  }
  if (!Array.isArray(t.swatches) || t.swatches.length === 0) {
    errors.push(`${where}: "swatches" must be a non-empty array`);
  } else {
    for (const c of t.swatches) {
      if (typeof c !== "string" || !HEX.test(c)) {
        errors.push(`${where}: swatch "${c}" is not a hex color`);
      }
    }
  }
  if (t.featured !== undefined && typeof t.featured !== "boolean") {
    errors.push(`${where}: "featured" must be boolean if present`);
  }
}

const seenTemplateIds = new Set();
for (const [i, t] of (reg.templates || []).entries()) {
  const where = `templates[${i}]${t.id ? ` (${t.id})` : ""}`;
  for (const field of ["id", "name", "author", "description", "source", "install"]) {
    requireString(t, field, where);
  }
  if (typeof t.id === "string") {
    if (!KEBAB.test(t.id)) errors.push(`${where}: "id" must be kebab-case`);
    if (seenTemplateIds.has(t.id)) errors.push(`${where}: duplicate template id`);
    seenTemplateIds.add(t.id);
  }
  if (!Array.isArray(t.screens) || t.screens.length === 0) {
    errors.push(`${where}: "screens" must be a non-empty array`);
  }
  if (t.featured !== undefined && typeof t.featured !== "boolean") {
    errors.push(`${where}: "featured" must be boolean if present`);
  }
}

if (errors.length) {
  console.error(`registry.json: ${errors.length} problem(s):\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(
  `registry.json OK — ${reg.themes.length} theme(s), ${reg.templates.length} presentation example(s).`
);
