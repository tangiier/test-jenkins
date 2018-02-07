pipeline{
  agent any

  stages{
    stage('NPM Install'){
        bat 'npm install'
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