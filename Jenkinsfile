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
        echo "npm install.."
        sh 'groups fanassi'
            //withNPM() {
               // sh 'npm install'
            //}
        }
    }


  }
}