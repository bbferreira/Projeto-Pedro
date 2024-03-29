<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


  <!-- 
    - primary meta tags
  -->
  <title>LosSantos Barbearia</title>
  <meta name="title" content="Barber - Barbers & Hair Cutting">
  <meta name="description" content="This is a barber html template made by codewithsadee">
  <link href="https://fonts.googleapis.com/css2?family=Grand+Theft+Auto&display=swap" rel="stylesheet">


  <!-- 
    - favicon
  -->
  <link rel="icon" type="image/png" sizes="32x32" href="./ms-icon-70x70.png">

  <!-- 
    - custom css link
  -->
  <link rel="stylesheet" href="./style.css">

  <!-- 
    - google font link
  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Rubik:wght@300,400;700&display=swap"
    rel="stylesheet">

  <link rel="stylesheet" href="https://code.jquery.com/ui/1.9.0/themes/base/jquery-ui.css" />
  <script src="https://code.jquery.com/jquery-1.8.2.js"></script>
  <script src="https://code.jquery.com/ui/1.9.0/jquery-ui.js"></script>
  <Script>
    let dataSelecionada = new Date();
    $(function () {
      $("#calendario").datepicker({
        dateFormat: 'dd/mm/yy',
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
        dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']


      });

      $("#calendario").change(function () {
        
        
     
        exibirHorariosDisponiveis();
      });



      $(".calendar-icon").click(function () {
        $(this).prev("#calendario").datepicker("show");
      });





    });

  </Script>
     



  <script type="text/javascript">

  </script>
  <!-- 
    - flaticon
  -->
  <link rel="stylesheet" href="./flaticon.min.css">
  <script src="https://kit.fontawesome.com/9fc8094a0d.js" crossorigin="anonymous"></script>

  <!-- 
    - preload images
  -->
  <link rel="preload" as="image" href="./hero-banner.jpg">

</head>

<body id="top">
  
   



   
    
</body>
<style>



.horario {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  color: #333;
  cursor: pointer;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
}

.horario:hover {
  background-color: #e0e0e0; /* Cor de fundo mais clara no hover */
}

/* Estilos para horários agendados */
.agendado {
  background-color: orange;
  border: 1px solid #e58f09;
  color: white;
  cursor: not-allowed;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 5px;
  opacity: 0.5; /* Opacidade para horários agendados */
}

/* Defina a cor laranja para horários agendados */
.agendado-laranja {
  background-color: orange;
  color: white;
}
</style>

  <!-- 
    - #HEADER
  -->

  <header class="header">
    <div class="header-top">
      <div class="container">

        <ul class="header-top-list">

          <li class="header-top-item">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

            <p class="item-title">Celular :</p>

            <a href="tel:01234567895" class="item-link">+55 (14)996977125</a>
          </li>

          <li class="header-top-item">
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

            <p class="open-title" id="status">Status atual :</p>

            <p class="item-text"></p>
          </li>

          <li>
            <ul class="social-list">
             

              <li>
                <a href="https://api.whatsapp.com/send?phone=5514996977125&text=%0AOl%C3%A1,%20estou%20enfrentando%20dificuldades%20para%20efetuar%20o%20agendamento%20no%20site%20%20e%20preciso%20de%20ajuda."
                  class="social-link" target="_blank" rel=”noopener noreferrer”>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </li>
            </ul>
        </ul>

      </div>
    </div>

    <div class="header-bottom" data-header>
      <div class="container">

        <a href="#" class="logo">
          <img src="./logopedro.jpg" class="logo-pedro" alt="logo">
        </a>

        <nav class="navbar container" data-navbar>
          <ul class="navbar-list">

            <li class="navbar-item">
              <a href="#inicio" class="navbar-link" data-nav-link>Inicio</a>
            </li>

            <li class="navbar-item">
              <a href="#serviços" class="navbar-link" data-nav-link>Serviços</a>
            </li>

            <li class="navbar-item">
              <a href="#cortes" class="navbar-link" data-nav-link>Cortes</a>
            </li>

            <li class="navbar-item">
              <a href="#contato" class="navbar-link" data-nav-link>Contato</a>
            </li>

          </ul>
        </nav>

        <button class="nav-toggle-btn" aria-label="toggle menu" data-nav-toggler>
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>
    </div>
  </header>
  <main>
    <article>
      <section class="section hero has-before has-bg-image paralax" id="inicio" aria-label="inicio"
        style="background-image: url('./hero-banner.jpg')">
        <div class="container">
          <h1 class="h1 hero-title" style=" color: #f5c518; font-size:30px; text-shadow: 2px 2px #000000;">Transforme
            seu visual na Los Santos Barbearia</h1>
          <p class="hero-text">
            Bem-vindo à Los Santos Barbearia, o lugar perfeito para homens que buscam um corte de cabelo ou barba
            impecáveis. Agende seu horário hoje mesmo e experimente o melhor corte de cabelo ou barba da cidade!
          </p>

          <a href="#serviços" class="btn has-before">
            <span class="span">Agendar</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>

        </div>
      </section>
      <!-- 
        - #PRICING
      -->
      <section class="section pricing " id="serviços" aria-label="serviços"
        style=" background-color:hsl(0, 0%, 4%); color: black;">
        <div class="container">

          <h2 class="h2 section-title text-center" style="color: #ffffff">Selecione seu serviço</h2>

          <p class="section-text text-center">
            "Descubra o estilo perfeito e a arte do cuidado masculino na Los Santos Barbearia"
          </p>

          <div class="pricing-tab-container">
            <ul class="grid-list">

              <li data-filter="shaving">
                <div class="pricing-card" onclick="selecionarDiv(this)">

                  <figure class="card-banner img-holder" style="--width: 90; --height: 90;">
                    <img src="./pricing-1.jpg" width="90" height="90" alt="Hair Cutting & Fitting"
                      class="img-cover">
                  </figure>

                  <div class="wrapper">
                    <h3 class="h3 card-title" id="titulo" style="color: #ffffff;">Corte</h3>

                    <p class="card-text" id="paragrafo" style="color: #ffffff;">45 minutos</p>
                  </div>

                  <data class="card-price" id="data" value="25">R$25</data>

                </div>
              </li>

              <li data-filter="shaving">
                <div class="pricing-card" onclick="selecionarDiv(this)">

                  <figure class="card-banner img-holder" style="--width: 90; --height: 90;">
                    <img src="./pricing-2.jpg" width="90" height="90" alt="Shaving & Facial"
                      class="img-cover">
                  </figure>

                  <div class="wrapper">
                    <h3 class="h3 card-title" style="color: #ffffff;" id="titulo">Barba</h3>

                    <p class="card-text" id="paragrafo" style="color: #ffffff;">45 minutos</p>
                  </div>

                  <data class="card-price" value="15" id="data">R$15</data>

                </div>
              </li>
              <li>
                <div class="pricing-card" onclick="selecionarDiv(this)" style="padding: 20px;">

                  <figure class="card-banner img-holder" style="--width: 90; --height: 90;">
                    <img src="./corte+barba.png" width="90" height="90" alt="Beauty & Spa"
                      class="img-cover">
                  </figure>

                  <div class="wrapper">
                    <h3 class="h3 card-title " style="font-size: 1.7rem; color: #ffffff;" id="titulo">Corte+Barba</h3>

                    <p class="card-text" style="color: #ffffff;" id="paragrafo">45 minutos</p>
                  </div>

                  <data class="card-price" value="40" id="data">R$40</data>

                </div>
              </li>
              <li data-filter="body-treatments">
                <div class="pricing-card" onclick="selecionarDiv(this)">

                  <figure class="card-banner img-holder" style="--width: 90; --height: 90;">
                    <img src="./luzes.png" width="90" height="90" alt="Body Massage" class="img-cover">
                  </figure>

                  <div class="wrapper">
                    <h3 class="h3 card-title" style="color: #ffffff;" id="titulo">Luzes</h3>

                    <p class="card-text" style="color: #ffffff;" id="paragrafo">45 minutes</p>
                  </div>

                  <data class="card-price" value="70" id="data">R$70</data>

                </div>
              </li>
              <li>
                <div class="pricing-card" onclick="selecionarDiv(this)">

                  <figure class="card-banner img-holder" style="--width: 90; --height: 90;">
                    <img src="./platinado.png" width="90" height="90" alt="Body Massage"
                      class="img-cover">
                  </figure>

                  <div class="wrapper">
                    <h3 class="h3 card-title" style="font-size: 1.7rem; color: #ffffff;" id="titulo">Platinado</h3>

                    <p class="card-text" style="color: #ffffff;" id="paragrafo">45 minutos</p>
                  </div>

                  <data class="card-price" value="100" id="data">R$100</data>

                </div>
              </li>
            </ul>
            <br>
            <div width="100%" class="container section appoin ">

              <div class="appoin-card  " width="100%">

                <figure class="card-banner img-holder" style="--width: 250; --height: 774;">
                  <img src="./appoin-banner-1.jpg" width="250" height="774" loading="lazy" alt=""
                    class="img-cover">
                </figure>

                <div id="agendamento-div" class="card-content" width="100%">

                  <h2 class="h2 section-title">Agendamento</h2>

                  <p class="section-text" style="color:#000000;">
                    Para Agendar é fácil só seguir os passos abaixo:
                  </p>

                  <form action="" class="appoin-form">

                    <div class="input-wrapper">
                      
                      <label for="name" style="color:#000000;"></label>
                      <input type="text" name="name" placeholder="Seu nome" required class="input-field">
                    </div>
                    <div class="input-wrapper">
                      
                      <label for="phone" style="color:#000000;"></label>
                      <input type="text" name="phone" placeholder="Numero de celular" required class="input-field">
                    </div>
                    <label for="data" style="color:#000000;"></label>
                    <div class="input-with-icon">
                      <input type="text" id="calendario" name="data" class="input-field"
                        placeholder="Selecione sua data" required>
                      <span class="calendar-icon"><i class="fas fa-calendar-alt"></i></span>
                    </div>

                    <style>
                      .input-with-icon {
                        position: relative;
                      }

                      .calendar-icon {
                        position: absolute;
                        top: 50%;
                        right: 10px;
                        transform: translateY(-50%);
                        color: black;
                        cursor: pointer;
                      }

                      .div-horarios {
                        width: 100%;
                        display: flex;
                        flex-direction: row;

                        flex-wrap: wrap;
                        margin-top: 10px;
                      }
                    </style>
                    <h2 class=" text-center" style="color:#000000;">Escolha um horario:</h2>
                    <button class="botao-proximo" type="button"
                      onclick="exibirHorariosDisponiveis()">Proximo</button><br>
                    <div class="div-horarios" id="horariosDisponiveis"></div>



                    <label for="data" style="color:#000000;">Quer deixar algum detalhe do corte?</label>
                    <textarea name="message" placeholder="Escreva em detalhes o seu corte:"
                      class="input-field"></textarea>

                    <button id="agendar-button" class="form-btn" onclick="finalizarAgendamento(horarioSelecionadoTexto)"   type="button">
                      <span class="span">Finalizar agendamento</span>

                      <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                    </button>

                  </form>

                </div>

                <figure class="card-banner img-holder" style="--width: 250; --height: 774;">
                  <img src="./appoin-banner-2.jpg" width="250" height="774" loading="lazy" alt=""
                    class="img-cover">
                </figure>

              </div>

            </div>

          </div>

        </div>
      </section>

      <section class="section gallery" id="cortes" aria-label="photo gallery">
        <div class="container">

          <div class="title-wrapper">

            <div>
              <h2 class="h2 section-title">Cortes</h2>

              <p class="section-text">
                "Descubra o estilo que mais combina com você"
              </p>
            </div>

           <!-- <a href="#" class="btn has-before">
              <span class="span">Explore seu estilo</span>

              <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
            </a> -->

          </div>

          <ul class="grid-list">

            <li>
              <div class="gallery-card">

                <figure class="card-banner img-holder" style="--width: 422; --height: 550;">
                  <img src="./corte pedro.jpg" width="422" height="550" loading="lazy" alt="Hair Cutting"
                    class="img-cover">
                </figure>

              </div>
            </li>

            <li>
              <div class="gallery-card">

                <figure class="card-banner img-holder" style="--width: 422; --height: 550;">
                  <img src="./corte-leoncio.jpg" width="422" height="550" loading="lazy"
                    alt="Hair Cutting" class="img-cover">
                </figure>

              </div>
            </li>

            <li>
              <div class="gallery-card">

                <figure class="card-banner img-holder" style="--width: 422; --height: 550;">
                  <img src="./corte-douglinha.jpg" width="422" height="550" loading="lazy"
                    alt="Hair Cutting" class="img-cover">
                </figure>

              </div>
            </li>

            <li>
              <div class="gallery-card">

                <figure class="card-banner img-holder" style="--width: 422; --height: 550;">
                  <img src="./platinado.jpg" width="422" height="550" loading="lazy" alt="Hair Cutting"
                    class="img-cover">
                </figure>

              </div>
            </li>

          </ul>

        </div>
      </section>

    </article>
  </main>

  <!-- 
    - #FOOTER
  -->

  <footer class="footer has-bg-image">
    <div class="container">

      <div class="footer-top">

        <div class="footer-brand">

          <a href="index.html" class="logo">
            <img src="./logopedro.jpg" class="logo-pedro" alt="logo">
          </a>
        </div>
        <ul class="footer-list">
            <li>
            <p class="footer-list-title">Contato</p>
          </li>

          <li class="footer-list-item">
            <ion-icon name="location-outline" aria-hidden="true"></ion-icon>

            <a class="address"
              href="https://www.google.com/maps/search/?api=1&query=Rua+Dona Rima Simão,+324,+Duatina,+São Paulo"
              target="_blank">
              Rua Dona Rima Simão - 324
            </a>

          </li>

          <li class="footer-list-item" id="contato">
            <ion-icon name="call-outline" aria-hidden="true"></ion-icon>

            <a href="tel:+55 (14)996977125" class="contact-link">+55 (14)996977125</a>
          </li>

          <li class="footer-list-item">
            <ion-icon name="time-outline" aria-hidden="true"></ion-icon>

            <span class="contact-link">Segunda - Sabádo, 09:00 as - 20:00</span>
          </li>

          <li class="footer-list-item">
            <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>

            <a href="mailto:bocardidevcompany@gmail.com" class="contact-link">bocardidevcompany@gmail.com</a>
          </li>
          <li class="footer-list-item">
            <ion-icon name="logo-instagram" class="icon-instagram"></ion-icon>
            <a href="https://instagram.com/lossantos.barbearia_?igshid=MjEwN2IyYWYwYw==" class="social-link" target="_blank" rel=”noopener noreferrer”>
              
              @lossantos.barbearia
            </a>
          </li>
          

        </ul>

      </div>

    </div>

    <div class="footer-bottom">
      <p class="copyright">
        &copy; 2023 <a href="index.html" class="copyright-link">LosSantos Barbearia</a>.Todos os direitos reservados.
      </p>
    </div>

    </div>
  </footer>





  <!-- 
    - #BACK TO TOP
  -->

  <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
    <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
  </a>





  <!-- 
    - custom js link
  -->


  <!-- 
    - ionicon link
  -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  <script src="./script.js"></script>


</body>

</html>