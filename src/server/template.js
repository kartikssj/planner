export default (content = "") => {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="shortcut icon" href="/public/favicon.png" />

                <!-- Bootstrap! -->
                <link rel="stylesheet" href="/public/bootstrap.min.css" crossorigin="anonymous">
                <script src="/public/jquery.min.js"></script>
                <script src="/public/bootstrap.min.js" crossorigin="anonymous"></script>

                <!-- Bootbox -->
                <script src="/public/bootbox.min.js"></script>
                
                <!-- Main CSS -->
                <link rel="stylesheet" href="/public/main.css" crossorigin="anonymous">
                
                <title>Planner</title>
            </head>
            <body>
                <div id="app">
                  ${content}
                </div>
                <script src="/public/client.js"> </script>
            </body>
        </html>
    `
}

