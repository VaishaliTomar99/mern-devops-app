pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = "mern-frontend"
        BACKEND_IMAGE = "mern-backend"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/VaishaliTomar99/mern-devops-app.git'
            }
        }

        stage('Build & Run Containers') {
            steps {
                sh """
                /usr/local/bin/docker-compose down || true
                /usr/local/bin/docker-compose up -d --build
                """
            }
        }

        stage('Verify Running Containers') {
            steps {
                sh "/usr/local/bin/docker ps"
            }
        }
    }

    post {
        success {
            echo '✅ MERN App Deployed Successfully!'
        }
        failure {
            echo '❌ Pipeline Failed!'
        }
    }
}
