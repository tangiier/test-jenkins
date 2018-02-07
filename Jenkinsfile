pipeline{
  agent any

  stages{
    stage('NPM Install'){
        withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {
            sh 'npm install'
        }
    }
     stage('Build') {
         //   milestone()
         sh 'ng build --prod --aot --sm --progress=false'
     }
     stage('Deploy') {
        milestone()
        echo "Deploying..."
     }
  }
}