/* eslint-disable no-console */

import fse from 'fs-extra';
import yargs from 'yargs';
import path from 'path';
import util from 'util';
import glob from 'glob';

const globAsync = util.promisify(glob);
/**
 * Return Pascal-Cased component name.
 *
 * @param {string} svgPath
 * @returns {string} class name
 */
function getComponentName(destPath) {
  const splitregex = new RegExp(`[${path.sep}-]+`);

  const parts = destPath
    .replace('.js', '')
    .split(splitregex)
    .map(part => {
      return part.charAt(0).toUpperCase() + part.substring(1);
    });

  return parts.join('');
}

async function generateIndex(options) {
  const files = await globAsync(path.join(options.outputDir, '*.js'));
  const index = files
    .map(file => {
      const typename = path.basename(file).replace('.js', '');
      return `export { default as ${typename} } from './${typename}';\n`;
    })
    .join('');

  await fse.writeFile(path.join(options.outputDir, 'index.js'), index);
}

async function main(options) {
  try {
    const exists1 = await fse.exists(options.outputDir);
    if (!exists1) {
      await fse.mkdir(options.outputDir);
    }

    await generateIndex(options);
  } catch (err) {
    console.log(err);
  }
}

if (require.main === module) {
  const argv = yargs
    .usage("Build JSX components from SVG's.\nUsage: $0")
    .demand('output-dir')
    .describe('output-dir', 'Directory to output jsx components')
    .demand('svg-dir')
    .describe('svg-dir', 'SVG directory')
    .describe('glob', 'Glob to match inside of --svg-dir. Default **/*.svg')
    .describe(
      'rename-filter',
      `Path to JS module used to rename destination filename and path.
        Default: ${RENAME_FILTER_DEFAULT}`,
    ).argv;
  main(argv);
}

export default {
  getComponentName,
  main,
};
