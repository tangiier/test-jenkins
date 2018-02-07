
pipeline{
agent any

  stages{
    stage('Checkout'){
        steps{
            echo "npm install..."
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