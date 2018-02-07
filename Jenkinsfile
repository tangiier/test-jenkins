
pipeline{
agent any

  stages{
    stage('Checkout'){
        steps{
            echo "checkout..."
            sh 'groups "Fouad El"'
            checkout scm
       }
  }
    stage('NPM Install'){
        steps{
        echo "npm install..."
  //          withNPM() {
                sh 'npm install'
    //        }
        }
    }

  }
}