
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
                sh 'set -x'
                sh 'cd angular && npm install && npm run build'
                sh 'set +x'
                sh 'set -x'
                sh 'cd angular && npm start'
                sh 'set +x'
    //        }
        }
    }

  }
}