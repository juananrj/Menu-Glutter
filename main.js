fetch("./menu.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("menu").innerHTML = data;
  });

  fetch("./muro.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("muro").innerHTML = data;
    });

    fetch("./pais.html")
      .then(response => {
        return response.text()
      })
      .then(data => {
        document.querySelector("pais").innerHTML = data;
      });

      fetch("./submenu.html")
        .then(response => {
          return response.text()
        })
        .then(data => {
          document.querySelector("submenu").innerHTML = data;
        });

        fetch("./servicios.html")
          .then(response => {
            return response.text()
          })
          .then(data => {
            document.querySelector("servicios").innerHTML = data;
          });
          fetch("./textaco.html")
            .then(response => {
              return response.text()
            })
            .then(data => {
              document.querySelector("textaco").innerHTML = data;
            });
            fetch("./galeria.html")
              .then(response => {
                return response.text()
              })
              .then(data => {
                document.querySelector("galeria").innerHTML = data;
              });
              fetch("./footer.html")
                .then(response => {
                  return response.text()
                })
                .then(data => {
                  document.querySelector("footer").innerHTML = data;
                });
