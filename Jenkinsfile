pipeline {
    agent any

    environment {
        // __define-ocg__: Project-specific settings
        PROJECT_NAME = "DevOps-Project-1"
        PORT = "5040"
    }

    tools {
        git 'Default'
    }

    stages {
        stage('Clone Repo') {
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

        stage('Run App') {
            steps {
                dir('frontend') {
                    bat "start /B npm start -- --port=%PORT%"
                }
            }
        }
    }
}
