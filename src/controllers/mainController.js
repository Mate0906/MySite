class MainController {
    getHomePage(req, res) {
        res.send("Welcome to the main page!");
    }
}

module.exports = MainController;