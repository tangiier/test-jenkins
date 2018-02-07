pipeline{
  agent any

  stages{
    stage('NPM Install'){
    steps{
        sh 'npm install'
        }
    }

     stage('Build') {
     steps{
         //   milestone()
         sh 'ng build --prod --aot --sm --progress=false'
         }
     }
     stage('Deploy') {
     {
        milestone()
        echo "Deploying..."
        }
     }
  }
}