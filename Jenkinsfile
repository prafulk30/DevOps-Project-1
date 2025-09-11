pipeline {
    agent any

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
                    bat '''
                    npm install -g serve
                    start cmd /c "serve -s build -l 5040"
                    '''
                }
            }
        }
    }
}
