pipeline{
  agent any

  stages{
  stage('Checkout'){
             checkout scm
       }
    stage('NPM Install'){
        steps{
            withNPM(npmrcConfig: 'my-custom-nprc') {
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