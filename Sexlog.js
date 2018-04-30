
describe ("Validação do Login", function()
{
    
    var Login = element(by.model("login.login"));
    var Pass = element(by.model("login.password"));
    var Btnlogin = element(by.css('button.btn-primary'));
    var loginComSucesso = element(by.css('.ng-scope p'));
    var loginComErro = element(by.binding('Auth.error'));

    beforeEach(function()
    {
        browser.get("https://www.sexlog.com/");
    });

    //Caso de testes
    it("Validar Login realizado com sucesso", function(){

        //Login
        Login.sendKeys("usertoexam");
        Pass.sendKeys("123456");
        browser.sleep(100);
        Btnlogin.click();
        browser.waitForAngular();
        browser.sleep(100);
        //Abrindo Modal
        element(by.css('div.ng-scope')).click();
        browser.sleep(100);
        //Escolhendo Plano
        element(by.cssContainingText('.plan-periody', '1 mês')).click();
        element(by.buttonText('Próximo passo: Pagamento')).click();
        browser.sleep(100);
        //Escolhendo Forma de Pagamento
        element(by.cssContainingText('.sl-btn','Boleto bancário')).click();
        //Inserindo CPF
        var CPF = '55424174345';
        browser.sleep(1000);
        for(var c in CPF)
        {
            element(by.model("subscription.invoice.cpf")).sendKeys(CPF[c]);
        }
        //Gerando Boleto
        element(by.cssContainingText('.sl-btn', 'Gerar boleto')).click();
        browser.sleep(3000);
        //Fechando Modal
        element(by.css('[ng-click="closeSubscribe()"]')).click();
        browser.sleep(1000);
        //Realizando Logout
        element(by.css('ul.profile')).click();
        browser.sleep(1000);
        element(by.css('li.logout')).click();
    })

});
