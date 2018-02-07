pipeline{
  agent {

          docker {

              image 'node:6-alpine'

              args '-p 3000:3000'

          }

      }
      environment {

              CI = 'true'

          }

  stages{
  stage('Checkout'){
  steps{
             checkout scm
       }
       }
    stage('NPM Install'){
        steps{
        echo "npm install.."
            //withNPM() {
                sh 'npm install'
            //}
        }
    }

     stage('Build') {
     steps{
         //   milestone()
         sh 'ng build --prod --aot --sm --progress=false'
         }
     }

  }
}