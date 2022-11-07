# `js-e2e-express-server`

## History

### Fork

Forked from: [`Azure-Samples/js-e2e-express-server`](https://github.com/Azure-Samples/js-e2e-express-server)

### Tutorial

Following this [tutorial](https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/javascript?view=azure-devops&pivots=pipelines-yaml)

#### Create pipeline

1. Sign in to Azure Pipelines. Your browser will go to https://dev.azure.com/my-organization-name and display your Azure DevOps dashboard.
1. Go to your project and select Pipelines > Create a new pipeline.
1. Select GitHub as the location of your source code.
1. If you're redirected to GitHub to sign in, enter your GitHub credentials.
1. When the list of repositories appears, select your Node.js sample repository.
1. Azure Pipelines analyzes the code in your repository and recommends the Node.js template for your pipeline. Select that template.
1. Azure Pipelines generates a YAML file for your pipeline. Select Save and run > Commit directly to the main branch, and then choose Save and run again.
1. A new run starts. Wait for the run to finish.

#### Build your package and publish an artifact

1. Edit your azure-pipelines.yml file.
1. Update the Node.js Tool Installer task to use Node.js version 16 LTS.
1. Add new tasks to your pipeline to copy your npm package, package.json, and to publish your artifact. The Copy Files task copies files from local path on the agent where your source code files are downloaded and saves files to a local path on the agent where any artifacts are copied to before being pushed to their destination. Those files are saved into a npm folder. The pipeline-artifactsPublish Pipeline Artifact task, downloads the files from the earlier Copy Files tasks and makes them available as pipeline artifacts that will be published with your pipeline build.
