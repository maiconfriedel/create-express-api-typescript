import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'create-expres-api-typescript',
  run: async toolbox => {
    const { print, parameters } = toolbox
    const { first: projectName, options } = parameters

    if (!projectName) {
      print.error('Invalid project name!')
      print.error('Usage: create-express-api-typescript name-of-api')
      return
    }

    await toolbox.gitClone(
      'https://github.com/maiconfriedel/express-api-starter-typescript.git',
      projectName
    )

    await toolbox.removeGitFolder(projectName)

    await toolbox.installDependencies(projectName, options.yarn)

    await toolbox.initializeGitRepo(projectName)

    print.success('Ready to go! 🏁')
    print.success('To get started, just: ')
    print.success(`cd ${projectName}`)
    print.success('npm run dev')
  }
}

module.exports = command
