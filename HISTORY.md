# `js-e2e-express-server`

## History

### Fork

Forked from: [`Azure-Samples/js-e2e-express-server`](https://github.com/Azure-Samples/js-e2e-express-server)

### Azure DevOps Tutorial

[Quickstart - Use Azure Pipelines to build and publish a Node.js package](https://learn.microsoft.com/en-us/azure/devops/pipelines/ecosystems/javascript?view=azure-devops&pivots=pipelines-yaml)

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

### Dockerize Tutorial

[Deploy to Azure Web App for Containers](https://learn.microsoft.com/en-us/azure/devops/pipelines/apps/cd/deploy-docker-webapp?view=azure-devops&tabs=java%2Cyaml)

#### Build and publish a Docker image to Azure Container Registry

1. Sign in to your Azure DevOps organization and navigate to your project.
1. Select Pipelines, and then New Pipeline.
1. Select GitHub when prompted for the location of your source code, and then select your repository.
1. Select the Docker: build and push an image to Azure Container Registry pipeline template.
1. Select your Azure subscription, and then select Continue.
1. Select your Container registry from the drop-down menu, and then select Validate and configure.
1. Review the pipeline YAML template, and then select Save and run to build and publish the Docker image to your Azure Container Registry.
1. To view the published Docker image after your pipeline run has been completed, navigate to your container registry in Azure portal, and then select Repositories.
1. To deploy your image from the container registry, you must enable the admin user account. Navigate to your container registry in Azure portal, and select Access keys. Next, select the toggle button to Enable Admin user.

#### Create a Web App for Containers

1. Navigate to Azure portal.
1. Select Create a resource > Containers, and then choose Web App for Containers.
1. Enter a name for your new web app, and create a new Resource Group. Select Linux for the Operating System.
1. In the SKU and Size section, select Change size to specify the pricing tier. Select the Dev/Test plan, and then choose the F1 Free plan. Select Apply when you are done.
1. Select Review and create. Review your configuration, and select Create when you are done.
