
pipeline{
agent any

  stages{
    stage('Checkout'){
        steps{
            echo "checkout..."
            sh 'groups "tangiier"'
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