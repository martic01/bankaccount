// Business Logic for each account
function BankAccount() {
    this.Accounts = {};
    this.currentId = 0;
}
BankAccount.prototype.AcctId = function () {
    this.currentId++;
    return this.currentId;
}
BankAccount.prototype.AddAcount = function (account) {
    account.id = this.AcctId();
    this.Accounts[account.id] = account;
}
BankAccount.prototype.findAccount = function (id) {
    if (this.Accounts[id] !== undefined) {
        return this.Accounts[id];
    }
    return false;
}

// Business Logic for each account
function Account(firstname, lastname, phonenumber, emailaddress, country, password, balance, point, transaction) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.phoneNumber = phonenumber;
    this.emailAddress = emailaddress;
    this.country = country;
    this.password = password;
    this.balance = balance;
    this.point = point
    this.transaction = transaction = function transaction(name, amount, event, reciveraccount) {
        this.name = name;
        this.amount = amount;
        this.event = event
        this.reciverAcccount = reciveraccount
    }

}
Account.prototype.generateAccountNumber = function () {
    return Math.floor(1000000000 + Math.random() * 9000000000)
}
Account.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
};

function loading() {
    let alert = document.getElementById("load");
    let page = document.getElementById("user");
    let logpage = document.getElementById("login");
    page.style.display = "none";
    alert.style.display = "block";
    logpage.style.display = "block";
    setTimeout(function () {
        $("#user").slideDown()
        alert.style.display = "none";
        logpage.style.display = "none";
    }, 4000);
}

function showAccount(accountId) {
    const account = bankAccount.findAccount(accountId);
    $(".userinterface").show()
    let page = $(".userbdy");
    page.empty();
    page.append(`
            <div class="userhd bgcolor2 flex font4">
                <div class="userpro flex">
                    <div class="bgcolor2 imagepro">
                        <img src="img/user-regular.svg" alt="">
                    </div>
                    <p>Hi <span class="username">${account.firstName}</span></p>
                </div>
                <div class="userpro flex pro">
                    <p class="flex">Point <span id="${account.id}" class="point">${account.point}</span></p>
                    <div class="imagelg">
                        <img class="def" id="${account.id}"  src="img/ellipsis-vertical-solid.svg" alt="">
                    </div>
                    <div class="boloc back">
                        <p class="red blok" id="${account.id}">Block</p>
                        <p class="red unblok" id="${account.id}">Unblock</p>
                        <p class="red logout def">Log Out</p>
                    </div>
                </div>
            </div>
            <div class="bginfo font4">
                <div class="info colortext2 flex2">
                    <p>Balance</p>
                    <div class="amount flex">
                        <div class="imgamount">
                            <img src="img/naira-sign-solid.svg" alt="">
                        </div>
                        <p class="currentamount">${account.balance}</p>
                        <div id="${account.id}" class="imghide imagelg">
                            <img  src="img/eye-regular (1).svg" alt="">
                        </div>
                    </div>
                    <p>Account Number</p>
                    <div class="acctnumdiv flex">
                        <p class="acctnum">${account.generateAccountNumber()}</p>
                        <div id="${account.id}" class="imghide imagelg">
                            <img src="img/copy-regular (1).svg" alt="">
                        </div>
                    </div>
                    <div class="allbtn flex">
                        <button id="${account.id}" class="buttin fund def block">Fund account</button>
                         <button id="${account.id}" class="buttin withdraw def block">WithDraw</button>
                        <button id="${account.id}" class="buttin tranhis def">Transaction History</button>
                    </div>
                </div>
            </div>
            <div class="ttr back">
                <div class="cancel">
                    <img src="img/xmark-solid.svg" alt="">
                </div>
                <div class="transactions flex2">
                    <p class="font3 colortext2 pfirst">Transaction History</p>
                    <div class="alltrs">
                       
                    </div>
                </div>
            </div>
            <div class="hide1 back">
                <div class="input flex2 creditfund">
                    <div class="cancel">
                        <img src="img/xmark-solid.svg" alt="">
                    </div>
                    <input placeholder="" readonly class="acctnuminput" type="text">
                    <input placeholder="Amount" id="${account.id}" class="credit newin" type="text">
                    <button id="${account.id}" class="buttins buttin newin moneybut">Credit</button>
                </div>
            </div>
            <div class="hide4 back">
                <div class="input flex2 with">
                    <div class="cancel">
                        <img src="img/xmark-solid.svg" alt="">
                    </div>
                    <input placeholder="" readonly class="acctnuminput" type="text">
                    <input placeholder="Amount" id="${account.id}" class="debit newin" type="text">
                    <button id="${account.id}" class="buttins buttin moneybut">withdraw</button>
                </div>
            </div>
            <div class="pay flex font4">
                <div class="contpay">
                    <div id="${account.id}" class="payment def ment block"><img src="img/sack-dollar-solid.svg" alt=""></div>
                    <p>Send Money</p>
                </div>
                <Marquee class="font3">Alert By Martic</Marquee>
                <div class="contpay">
                    <div id="${account.id}" class="payment ment2 def block"><img src="img/money-bill-solid.svg" alt=""></div>
                    <p>Buy Airtime</p>
                </div>
            </div>
            <div class="hide2 back">
                <div class="input flex2 send">
                    <div class="cancel">
                        <img src="img/xmark-solid.svg" alt="">
                    </div>
                     <input placeholder="Receviers name"  id="${account.id}"  class="sendname" type="text" name="">
                    <input id="${account.id}" placeholder="Receviers Account Number" class="acctnumrev" type="number">
                     <input id="${account.id}" placeholder="Amount" class="funds" type="text" name="">
                    <button id="${account.id}" class="buttins buttin moneybut">Send</button>
                </div>
            </div>
            <div class="hide3 back">
                <div class="input flex2 airtime">
                    <div class="cancel">
                        <img src="img/xmark-solid.svg" alt="">
                    </div>
                    <input id="${account.id}" placeholder="Network" class="network" type="text" name="">
                    <input id="${account.id}" placeholder="Airtime/Data" class="card" type="text" name="">
                     <input placeholder="Recivers Number" id="${account.id}" class="cardphonenm" type="number" name="">
                    <input id="${account.id}" placeholder="Amount" class="datamount" type="text">
                    <button id="${account.id}" class="buttins buttin moneybut">Buy</button>
                </div>
            </div>
            
        `);
}
function attachAccountListeners() {
    $(".userbdy").on('click', '.def', function () {
        let control = $(".def").index(this);
        let accountnom = $(this).closest(".bginfo").find(".acctnum").text();
        // $(account.id + ".acctnum").text()
        switch (control) {
            case 0:
                $(".boloc").slideToggle();
                $(".ttr").slideUp();
                $(".hide1").slideUp();
                $(".hide3").slideUp();
                $(".hide2").slideUp();
                $(".hide4").slideUp();
                $("marquee").show();
                break;
            case 1:
                $(".boloc").slideUp();
                $(".login-page").show()
                $(".userinterface").slideUp();
                $(".login").show()
                $(".signup").hide()
                $(".ttr").slideUp();
                $(".hide1").slideUp();
                $(".hide3").slideUp();
                $(".hide2").slideUp();
                $(".hide4").slideUp();
                $("marquee").show();
                break;
            case 2:
                $(".boloc").slideUp();
                $(".hide4").slideUp();
                $(".ttr").slideUp();
                $(".hide1").fadeIn();
                $(".hide3").slideUp();
                $(".hide2").slideUp();
                $("marquee").show();
                $(".acctnuminput").val(accountnom);
                break;
            case 3:
                $(".boloc").slideUp();
                $(".hide1").slideUp();
                $(".hide2").slideUp();
                $(".hide3").slideUp();
                $(".hide4").fadeIn();
                $("marquee").hide();
                $(".ttr").slideUp();
                break;
            case 4:
                $(".boloc").slideUp();
                $(".ttr").fadeIn();
                $(".hide4").slideUp();
                $(".hide1").slideUp();
                $(".hide3").slideUp();
                $(".hide2").slideUp();
                $("marquee").show();
                break;
            case 5:
                $(".boloc").slideUp();
                $(".ttr").slideUp();
                $(".hide1").slideUp();
                $(".hide3").slideUp();
                $(".hide2").fadeIn();
                $(".hide4").slideUp();
                $("marquee").show();
                break;
            default:
                $(".boloc").slideUp();
                $(".hide3").fadeIn();
                $(".hide2").slideUp();
                $(".hide1").slideUp();
                $(".ttr").slideUp();
                $(".hide4").slideUp();
                $("marquee").show();
        }
    })
    function PromtTimer() {
        let alert = document.getElementById("warning");
        alert.style.display = "block"
        setTimeout(function () {
            alert.style.display = "none";
        }, 2000);
    }
    function fundAccount(accountId) {

        const account = bankAccount.findAccount(accountId);
        let currentBalance = parseFloat(account.balance);
        let inputedfund = parseFloat($(`#${accountId}.credit`).val());
        let limit = 100500000
        if (currentBalance + inputedfund > limit) {
            PromtTimer()
            $(".warn").text("Cannot Add funds, Income limit exceeded");
            return currentBalance.toFixed(2);
        }

        if (isNaN(inputedfund) || inputedfund <= 0) {
            PromtTimer()
            $(".warn").text("Invalid Fund Amount");
            return currentBalance.toFixed(2);
        }

        let newBalance = (currentBalance + inputedfund).toFixed(2);
        account.balance = newBalance;
        let contactsList = $(".alltrs");
        let transaction = new account.transaction(account.firstName, inputedfund, "Credit", accountId);
        contactsList.append(`
            <div class="record flex font4">
                <div class="recimg">
                    <img src="img/money-bill-solid.svg" alt="">
                </div>
                <div class="rectext flex">
                    <p class="reason">${transaction.name}</p>
                    <p class="show">${transaction.amount.toFixed(2)}</p>
                    <p class="green show">${transaction.event}</p>
                </div>
            </div>
        `);

        return newBalance;
    }
    function WithDrawFunds(accountId) {

        const account = bankAccount.findAccount(accountId);
        let currentBalance = parseFloat(account.balance);
        let inputedfund = parseFloat($(`#${accountId}.debit`).val());

        if (currentBalance < inputedfund) {
            PromtTimer()
            $(".warn").text("Cannot withdraw funds, Income limit exceeded");
            return currentBalance.toFixed(2);
        }

        if (isNaN(inputedfund) || inputedfund <= 0) {
            PromtTimer()
            $(".warn").text("Invalid Fund Amount");
            return currentBalance.toFixed(2);
        }

        let newBalance = (currentBalance - inputedfund).toFixed(2);
        account.balance = newBalance;
        let contactsList = $(".alltrs");
        let transaction = new account.transaction(account.firstName, inputedfund, "Debit", accountId);
        contactsList.prepend(`
            <div class="record flex font4">
                <div class="recimg">
                    <img src="img/money-bill-solid.svg" alt="">
                </div>
                <div class="rectext flex">
                    <p class="reason">${transaction.name}</p>
                    <p class="show">${transaction.amount.toFixed(2)}</p>
                    <p class="red show">${transaction.event}</p>
                </div>
            </div>
        `);

        return newBalance;
    }
    function sendFunds(accountId) {

        const account = bankAccount.findAccount(accountId);
        let currentBalance = parseFloat(account.balance);
        let inputedfund = parseFloat($(`#${accountId}.funds`).val());
        let nameSent = $(`#${accountId}.sendname`).val().trim()
        let nameSentnum = $(`#${accountId}.acctnumrev`).val().trim()

        if (inputedfund !== "" && nameSent !== "" && nameSentnum.length === 10) {
            if (currentBalance < inputedfund) {
                PromtTimer()
                $(".warn").text("Cannot send funds, Income limit exceeded");
                return currentBalance.toFixed(2);
            }

            if (isNaN(inputedfund) || inputedfund <= 0) {
                PromtTimer()
                $(".warn").text("Invalid Fund Amount");
                return currentBalance.toFixed(2);
            }

            let newBalance = (currentBalance - inputedfund).toFixed(2);
            account.balance = newBalance;
            let contactsList = $(".alltrs");
            let reson = nameSent + ' | ' + nameSentnum
            let transaction = new account.transaction(reson, inputedfund, "Debit", accountId);
            contactsList.prepend(`
            <div class="record flex font4">
                <div class="recimg">
                    <img src="img/money-bill-solid.svg" alt="">
                </div>
                <div class="rectext flex">
                    <p class="reason">${transaction.name}</p>
                    <p class="show">${transaction.amount.toFixed(2)}</p>
                    <p class="red show">${transaction.event}</p>
                </div>
            </div>
        `);

            return newBalance;
        }
        $(".warn").text("Pls check your input");
        PromtTimer()
    }
    function Recharge(accountId) {

        const account = bankAccount.findAccount(accountId);
        let currentBalance = parseFloat(account.balance);
        let inputedfund = parseFloat($(`#${accountId}.datamount`).val());
        let valueSent = $(`#${accountId}.card`).val().trim()
        let valuenet = $(`#${accountId}.network`).val().trim()
        let valuenum = $(`#${accountId}.cardphonenm`).val().trim()

        if (valueSent !== "" && valueSent === "airtime".toLowerCase() || valueSent === "data".toLowerCase() && valuenet !== "" && valuenet === "airtel".toLowerCase() || valueSent === "mtn".toLowerCase() || valueSent === "glo".toLowerCase() || valueSent === "9mobile".toLowerCase() && valuenum.length === 11) {
            if (currentBalance < inputedfund) {
                PromtTimer()
                $(".warn").text("Cannot buy , Income limit exceeded");
                return currentBalance.toFixed(2);
            }

            if (isNaN(inputedfund) || inputedfund <= 0) {
                PromtTimer()
                $(".warn").text("Invalid Fund Amount");
                return currentBalance.toFixed(2);
            }

            let newBalance = (currentBalance - inputedfund).toFixed(2);
            account.balance = newBalance;
            let contactsList = $(".alltrs");
            let reson = valuenet + " | " + valueSent
            let transaction = new account.transaction(reson, inputedfund, "Debit", accountId);
            contactsList.prepend(`
            <div class="record flex font4">
                <div class="recimg">
                    <img src="img/money-bill-solid.svg" alt="">
                </div>
                <div class="rectext flex">
                    <p class="reason">${transaction.name}</p>
                    <p class="show">${transaction.amount.toFixed(2)}</p>
                    <p class="red show">${transaction.event}</p>
                </div>
            </div>
        `);

            return newBalance;
        }
        $(".warn").text("Pls check your input");
        PromtTimer()
    }
    function Accountpoint(accountId) {
        const account = bankAccount.findAccount(accountId);

        // if (!account) {
        //     console.error("Account not found");
        //     return;
        // }
        let addedPoint = 2
        let pointLimit = 10
        let limit = 100500000
        let currentPoint = parseInt(account.point);
        let currentBalance = parseFloat(account.balance);
        let inputedfund = parseFloat($(`#${accountId}.credit`).val());

        if (isNaN(inputedfund) || inputedfund <= 0) {
            console.error("Invalid fund amount");
            return currentpoint;
        }

        let newPoint = currentPoint + addedPoint;
        let newBalance = currentBalance + inputedfund;

        if (newBalance > limit && newPoint > pointLimit) {
            newPoint = 0;
            account.point = newPoint;
        } else {
            account.balance = currentBalance.toFixed(2);
            account.point = newPoint;
        }
        return account.point;
    }
    $(".userbdy").on('click', '.moneybut', function () {
        let control = $(".moneybut").index(this);
        let accountId = $(this).attr('id');
        console.log(control)
        switch (control) {
            case 0:
                let updatedBalance = fundAccount(accountId);
                if (updatedBalance !== undefined) {
                    $(".currentamount").text(updatedBalance);
                    $(".point").text(Accountpoint(accountId))
                    $(".credit").val("");
                }
                break;
            case 1:
                let updatedBalanceout = WithDrawFunds(accountId);
                if (updatedBalanceout !== undefined) {
                    $(".currentamount").text(updatedBalanceout);
                    $(".point").text(Accountpoint(accountId))
                    $(".debit").val("");
                }
                break;
            case 2:
                let updatedBalanceOutSend = sendFunds(accountId);
                if (updatedBalanceOutSend !== undefined) {
                    $(".currentamount").text(updatedBalanceOutSend);
                    $(".point").text(Accountpoint(accountId))
                    $(".funds").val("");
                }
                break;
            case 3:
                let updatedBalanceCard = Recharge(accountId);
                if (updatedBalanceCard !== undefined) {
                    $(".currentamount").text(updatedBalanceCard);
                    $(".point").text(Accountpoint(accountId))
                    $(".datamount").val("");
                }
                break;
            default:

        }
    })

    function block() {
        $(".block").addClass("blocked").on('click.blocked', function (event) {
            event.preventDefault();
            event.stopImmediatePropagation()
        })
        $(".blok").hide();
        $(".unblok").fadeIn();
    }
    function unBlock() {
        $(".block").removeClass("blocked").off('click.blocked')
        $(".blok").fadeIn();
        $(".unblok").hide();
    }
    $(".userbdy").on('click', '.blok', function () {
        block()
        $(".credit").val("");
        $(".debit").val("");
        $(".funds").val("");
        $(".datamount").val("");
    })
    $(".userbdy").on('click', '.unblok', function () {
        unBlock()
    })
    $(".userbdy").on('click', '.cancel', function () {
        $(".back").slideUp()
        $(".credit").val("");
        $(".debit").val("");
        $(".funds").val("");
        $(".datamount").val("");
        $("marquee").show();
    })
    $(".userbdy").on('click', 'moneybut', function () {
        block()
    })
}


let bankAccount = new BankAccount();


$(document).ready(function () {
    attachAccountListeners();
    $(".continue").submit(function (event) {
        event.preventDefault();
        loading()
        // $(".login-page").slideUp();

        const inputtedFirstName = $(".firstname").val();
        const inputtedLastName = $(".lastname").val();
        const inputtedPhoneNumber = $(".phonenumber").val();
        const inputtedEmailAddress = $(".emailaddress").val();
        const inputtedCountry = $(".country").val();
        const inputtedPassword = $(".country").val();
        let num = 0
        const currentBalance = num.toFixed(2)
        const point = parseFloat("0")


        $(".firstname").val("");
        $(".lastname").val("");
        $(".phonenumber").val("");
        $(".emailaddress").val("");
        $(".homeaddress").val("");

        let newAccount = new Account(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmailAddress, inputtedCountry, inputtedPassword, currentBalance, point);
        bankAccount.AddAcount(newAccount);

        showAccount(newAccount.id)
    });
});
window.onload = function () {

    $(".signupin").submit(function (refresh) {
        refresh.preventDefault()
        $(".continue").slideDown()
        $(".signupin").slideUp()

    })
    $(".signto").click(function () {
        $(".signup").show()
        $(".login").hide()
        $(".continue").hide()
        $(".signupin").slideDown()
    })
    $(".loginto").click(function () {
        $(".login").show()
        $(".signup").hide()
    })
    $(".def").click(function () {
        let control = $(".def").index(this);
        switch (control) {
            case 0:
                $(".boloc").slideToggle();
                $(".ttr").slideUp();
                $(".hide1").slideUp();
                $(".hide3").slideUp();
                $(".hide2").slideUp();
                break;
            case 1:
                $(".boloc").slideUp();
                $(".login-page").show()
                $(".userinterface").slideUp();
                $(".ttr").slideUp();
                $(".hide1").slideUp();
                $(".hide3").slideUp();
                $(".hide2").slideUp();
                break;
            case 2:
                $(".boloc").slideUp();
                $(".hide1").fadeIn();
                $(".hide2").slideUp();
                $(".hide3").slideUp();
                $(".ttr").slideUp();
                break;
            case 3:
                $(".boloc").slideUp();
                $(".ttr").fadeIn();
                $(".hide1").slideUp();
                $(".hide3").slideUp();
                $(".hide2").slideUp();
                break;
            case 4:
                $(".boloc").slideUp();
                $(".ttr").slideUp();
                $(".hide1").slideUp();
                $(".hide3").slideUp();
                $(".hide2").fadeIn();
                break;
            default:
                $(".boloc").slideUp();
                $(".hide3").fadeIn();
                $(".hide2").slideUp();
                $(".hide1").slideUp();
                $(".ttr").slideUp();
        }
    })


}
