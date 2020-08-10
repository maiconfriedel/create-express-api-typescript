import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'create-expres-api-typescript',
  run: async toolbox => {
    const { print, parameters } = toolbox
    const { first: projectName } = parameters

    if (!projectName) {
      print.error('Invalid project name!')
      print.error('Usage: create-express-api-typescript name-of-api')
      return
    }

    const cloneResponse = await toolbox.gitClone(
      'https://github.com/maiconfriedel/express-api-starter-typescript.git',
      projectName
    )

    if (cloneResponse) {
      const removeGitFolderResponse = await toolbox.removeGitFolder(projectName)

      if (removeGitFolderResponse) {
        const initializeGitRepoResponse = await toolbox.initializeGitRepo(
          projectName
        )
        if (initializeGitRepoResponse) {
          print.success('Ready to go! 🏁')
          print.success('To get started, just: ')
          print.success(`cd ${projectName}`)
          print.success('npm run dev')
        }
      }
    }
  }
}

module.exports = command
