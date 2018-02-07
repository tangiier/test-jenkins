pipeline{
  agent any

  stages{
  stage('Checkout'){
  steps{
             checkout scm
       }
       }
    stage('NPM Install'){
        steps{
        echo "npm install"
            withNPM() {
                sh 'npm install'
            }
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