const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connection");
const app = express();
const auth = require("./middlewares/auth");

app.use(cors());
app.use(express.json());

/*===================================================ADMIN ROUTES===================================================== */
const adminAuthRoutes = require("./admin/routes/adminAuth.routes");
const adminNotificationRoutes = require("./admin/routes/adminNotification.routes");
const adminUserRoutes = require("./admin/routes/adminUsers.routes");

app.use("/api/v1", auth, adminAuthRoutes);
app.use("/api/v1", auth, adminNotificationRoutes);
app.use("/api/v1", auth, adminUserRoutes);

/*===================================================USER ROUTES===================================================== */
const userAuthRoutes = require("./user/routes/userAuth.routes");
const userNotificationRoutes = require("./user/routes/userNotification.routes");

app.use("/api/v1", auth, userAuthRoutes);
app.use("/api/v1", auth, userNotificationRoutes);

/*===================================================OTHER ROUTES===================================================== */
const packageRoutes = require("./common/routes/package.routes");
const visaCategoryRoutes = require("./common/routes/visaCategory.routes");
const notesRoutes = require("./common/routes/notes.routes");
const pageTypeRoutes = require("./common/routes/pageType.routes");
const partnerRoutes = require("./common/routes/partner.routes");
const orderDetailsRoutes = require("./common/routes/orderDetails.routes");
const paymentRoutes = require("./common/routes/payment.routes");
const dashboardRouter = require("./common/routes/dashboard.routes");
const packageNotesRoutes = require("./common/routes/packageNotes.routes");
const subscriptionRoutes = require("./common/routes/subscription.routes");
const documentRoutes = require("./common/routes/document.routes");
const tourTypesRoutes = require("./common/routes/tourTypes.routes");
const blogRoutes = require("./common/routes/blog.routes");
const pagesRoutes = require("./common/routes/pages.routes");
const careerRoutes = require("./common/routes/career.routes");
const travelAgentRoutes = require("./common/routes/travelAgent.routes");
const aboutRoutes = require("./common/routes/about.routes");
const contactRoutes = require("./common/routes/contact.routes");

app.use("/api/v1", auth, packageRoutes);
app.use("/api/v1", auth, visaCategoryRoutes);
app.use("/api/v1", auth, notesRoutes);
app.use("/api/v1", auth, pageTypeRoutes);
app.use("/api/v1", auth, partnerRoutes);
app.use("/api/v1", auth, orderDetailsRoutes);
app.use("/api/v1", auth, paymentRoutes);
app.use("/api/v1", auth, dashboardRouter);
app.use("/api/v1", auth, packageNotesRoutes);
app.use("/api/v1", auth, subscriptionRoutes);
app.use("/api/v1", auth, documentRoutes);
app.use("/api/v1", auth, tourTypesRoutes);
app.use("/api/v1", auth, blogRoutes);
app.use("/api/v1", auth, pagesRoutes);
app.use("/api/v1", auth, careerRoutes);
app.use("/api/v1", auth, aboutRoutes);
app.use("/api/v1", auth, travelAgentRoutes);
app.use("/api/v1", auth, contactRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 6000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Error in database connection: ${error.message}`);
  });
