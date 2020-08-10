import { GluegunToolbox, filesystem } from 'gluegun'

module.exports = (toolbox: GluegunToolbox) => {
  ;(toolbox.gitClone = async (
    repoUrl: string,
    projectName: string
  ): Promise<boolean> => {
    const { system, print } = toolbox

    try {
      const gitVersionResponse = await system.run('git --version')
      print.info(`Successfully detected ${gitVersionResponse.trim()}`)

      await system.run(`git clone ${repoUrl} ${projectName}`)

      print.info('Sucessfully cloned the repo.')
      return true
    } catch (err) {
      print.error(err.toString())
      return false
    }
  }),
    (toolbox.removeGitFolder = async (projectName: string) => {
      const { filesystem, print } = toolbox

      try {
        filesystem.remove(filesystem.resolve(projectName, '.git'))
        print.info('Removed .git folder.')
        return true
      } catch (err) {
        print.error(err.toString())
        return false
      }
    }),
    (toolbox.initializeGitRepo = async (projectName: string) => {
      const { system, print } = toolbox

      try {
        await system.run(
          `cd ${filesystem.resolve(
            projectName
          )} && git init && git add . && git commit -m "Initial Commit"`
        )
        print.info(
          'Sucessfully intialized git repo and made the initial commit.'
        )
        return true
      } catch (err) {
        print.error(err.toString())
        return false
      }
    })
}
