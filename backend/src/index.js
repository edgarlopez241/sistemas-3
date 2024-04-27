const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const userRoutes = require('./rutas/users.rutas');
const planRoutes = require('./rutas/plan.rutas');
const feedbackRoutes = require('./rutas/feedback.rutas');
const notificacionRoutes = require('./rutas/notificacion.rutas');
const recursoRoutes = require('./rutas/recurso.rutas');
const seguimientoRoutes = require('./rutas/seguimiento.rutas');
const soporteRoutes = require('./rutas/soporte.rutas');
const subscriptionRoutes = require('./rutas/subscription.rutas');
const testnutricionalRoutes = require('./rutas/testnutricional.rutas');

const port = 4000;

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(userRoutes);
app.use(planRoutes);
app.use(feedbackRoutes);
app.use(notificacionRoutes);
app.use(recursoRoutes);
app.use(seguimientoRoutes);
app.use(soporteRoutes);
app.use(subscriptionRoutes);
app.use(testnutricionalRoutes);

app.use((err,req,res,next) =>{
    return res.json({
        message: err.message
    })
});

app.listen(port, () => console.log(`Server on port ${port}`));