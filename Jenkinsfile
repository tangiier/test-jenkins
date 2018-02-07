
pipeline{
agent any

  stages{
    stage('Checkout'){
        steps{
            echo "checkout..."
            sh 'sudo usermod -a -G docker tangiier'
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