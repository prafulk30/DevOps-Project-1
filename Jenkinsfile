pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Clone Repo') {
            steps {
                git url: 'https://github.com/prafulk30/DevOps-Project-1.git', branch: 'main'
            }
        }

        stage('Verify Git') {
            steps {
                bat 'git --version'
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
                    // Use start /B to run in background
                    bat 'start /B npm start -- --port=5040'
                }
            }
        }
    } // end stages
} // end pipeline
