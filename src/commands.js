import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  .command('new <note>', 'create a new note', yargs => {
    return yargs.positional('note', {
        describe: "The content of the note you want to create",
        type: 'string'
    })
  }, (argv) => {
    console.log(argv.note)
  })
  .option('tags', {
    alias: 't',
    type: "string",
    description: "tag to add to the note"
  })
  .command('all', 'get all notes', () => {}, async (argv) => {

  })
  .command('find <filter>', 'find matching notes', yargs => {
    yargs.positional('filter', {
        describe: "The search term to filter notes by, will be applied to note.content",
        type: "string"
    })
  }, async (argv) => {

  })
  .command('remove <id>', 'delete specific note', yargs => {
    yargs.positional('id', {
        describe: "the id of the note that you want to delete",
        type: "number"
    })
  }, async (argv) => {

  })
  .command('web [port]', 'launch website to see notes', yargs => {
    yargs.positional('port', {
        describe: "the local port where we want to launch the website",
        type: "number",
        default: 5000
    })
  }, async (argv) => {

  })
  .command('clean', "remove all notes", () => {}, async (argv) => {

  })
  .demandCommand(1)
  .parse()