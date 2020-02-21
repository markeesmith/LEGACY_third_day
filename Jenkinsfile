pipeline {
    agent any

    tools {nodejs "Node 11.13.0"}

    environment {
        CI = 'true'
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Test Stage placeholder until Jest is implemented'
            }
        }
        stage('Deploy DEV') {
            when {
                branch 'dev'
            }
            steps {
                sh './jenkins/scripts/deploy.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
            }
        }
        stage('Deploy TEST') {
            when {
                branch 'int'
            }
            steps {
                echo 'Deploy Stage placeholder for INT branch'
            }
        }
        stage('Deploy PROD') {
            when {
                branch 'master'
            }
            steps {
                echo 'Deploy Stage placeholder for MASTER branch'
            }
        }
     }
}