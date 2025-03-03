import { config } from './config'
import { logger } from './libs/logger'
import { app } from './libs/server'

const { PORT } = config

app.listen(PORT, () => {
	logger.info(
		`🚀 Server is up and running! Access it at: http://localhost:${PORT}/api/health-check`,
	)
})
