pipeline {
    agent any

    environment {
        NODEJS_HOME = "C:\\Program Files\\nodejs" // Make sure this points to your Node.js installation
        PATH = "${env.NODEJS_HOME};${env.PATH}"
    }

    stages {
        stage('Checkout SCM') {
            steps {
                git branch: 'main', url: 'https://github.com/prafulk30/DevOps-Project-1.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    bat 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    bat 'npm run build'
                }
            }
        }

        stage('Serve Frontend') {
            steps {
                dir('frontend') {
                    // Install serve globally if not installed
                    bat 'npm install -g serve'
                    // Serve the build folder on port 5040
                    bat 'start /B serve -s build -l 5040'
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline finished successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
