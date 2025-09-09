pipeline {
    agent any

    environment {
        PORT = 5040
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
                    bat '''
                    npm install -g serve
                    serve -s build -l 5040
                    '''
                }
            }
        }
    }
}
