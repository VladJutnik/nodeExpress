server:
	docker run -p 5000:5000 -d --rm --name notes-backend --network notes-net -v C:\nodeExpress-master\:/app -v /app/node_modules --env-file ./dev.env notes-backend-img
