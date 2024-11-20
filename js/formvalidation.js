document.addEventListener("DOMContentLoaded", function () {
  let validation = new JustValidate('.form',{
    errorLabelStyle: {
      color: '#FF5C00'
    }
  })
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.name',[{
      rule: 'minLength',
      value: 2,
      errorMessage: "Вы не ввели имя",
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: "Вы ввели больше чем положено"
    }
    ])
    .addField('.mail', [{
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Вы не корректно ввели e-mail',
    }
    ])
    .addField('.tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Вы не ввели телефон',
    }])
    .onSuccess((event) => {
      validation.form.submit()
    });

})


