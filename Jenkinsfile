pipeline{
  agent any

  stages{
  stage('Checkout'){
  steps{
             checkout scm
       }
       }
    stage('NPM Install'){
      withNPM(npmrcConfig: 'my-custom-nprc') {
        steps{

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