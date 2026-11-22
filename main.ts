import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// This still life holds one resting dog and the last sound leaving him.
// Nothing in the scene asks to be fixed; the small room may stay quiet.
// The sleeping dog gives the reader a gentle, dependable sense of containment.
// His ear gathers the final words, then releases them in a quiet process.
// The process is gradual, bodily, and easy to follow without effort.
// Plain words keep the image near, without a flourish to interpret.
// A reader can settle into the sentence as the dog settles into sleep.
// The stillness makes room for a slower breath and a softer attention.
// It relaxes by holding one small change at a time: sound, breath, rest.

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || './output';
const entryText = "Sleep comes to the dog mid-sentence. His ear holds the last of the sound, then lets it go with the next slow breath.";
const entryFile = join(outputDirectory, 'entry.txt');

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(entryFile, entryText, 'utf8');
