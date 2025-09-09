pipeline {
    agent any

    tools {
        git 'Default'   // ⬅️ must match the Git installation name in Jenkins Global Tool Config
    }

    environment {
        // __define-ocg__: Project-specific settings
        PROJECT_NAME = "DevOps-Project-1"
        PORT = "5040"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/prafulk30/DevOps-Project-1.git'
            }
        }

        stage('Verify Git') {
            steps {
                sh 'git --version'   // confirm Jenkins can use Git properly
            }
        }

        stage('Install Dependencies') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build'
                }
            }
        }

        stage('Run App') {
            steps {
                dir('frontend') {
                    sh "nohup npm start -- --port=${PORT} &"
                }
            }
        }
    }
}
