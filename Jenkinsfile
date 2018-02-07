
pipeline{
    agent {
        docker {
            image 'node:latest'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }

  stages{
    stage('Checkout'){
        steps{
            echo "checkout..."
            checkout scm
       }
  }
    stage('NPM Install'){
        steps{
        echo "npm install..."
  //          withNPM() {
                sh 'cd angular && npm install'
    //        }
        }
    }

  }
}