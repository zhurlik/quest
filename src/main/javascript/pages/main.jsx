var React = require('react');
var ReactDOM = require('react-dom');
var css = require('../css/main.css');

module.exports = function () {
    var Block = React.createClass({

        /**
         * Initial state on the first page.
         *
         * @returns {{pageId: string, taskDescription: string, taskHandler: Block.intro, taskVideo: *, showVideo: string, showInput: string, showQuestion: string, button: string}}
         */
        getInitialState: function () {
            return {
                pageId: 'intro',
                taskDescription: 'Ну, что Вы готовы?',
                taskHandler: this.intro,
                taskVideo: require('../video/intro.mp4'),
                showVideo: 'show',
                showInput: 'notShow',
                showQuestion: 'notShow',
                button: 'Йо-Xo-Xo'
            }
        },

        /**
         * To move on first task.
         *
         * @param event
         */
        intro: function (event) {
            console.log('>> Переходим к заданиям...');

            this.setState({
                pageId: 'task1',
                showVideo: 'show',
                showQuestion: 'notShow',
                showInput: 'show',
                taskDescription: 'Вот мое первое задание на проверку Вашей пиратской сноровки, и я посмотрю, хватит ли у Вас сил на поиски сокровищ. ' +
                'Вы должены ТОЧНО посчитать, сколько ступенек в вашем доме. И это число будет первой частью кода. ' +
                'Вторая часть кода - это количество черных меток на приглашении, внизу которого изображены ШТУРВАЛ, ЧЕРЕП, ЯКОРЬ. ' +
                'Соедините два этих числа и Вы получите код, который и будет ответом на это задание',
                taskHandler: this.task1,
                taskVideo: require('../video/task1.mp4'),
                button: 'Вперед Малявки'
            });
        },

        /**
         * To display sometime messages in the error section.
         *
         * @param msg
         * @param delay
         */
        sayError: function (msg, delay) {
            setTimeout(function () {
                this.setState({error: msg});
            }.bind(this), delay);
        },

        /**
         * To check entered answer for first task.
         *
         * @param event
         */
        task1: function (event) {
            console.log('>> Отвечаем на первое задание и пытаемся перейти к следующему заданию');

            // right code
            if (this.refs.answer.value === '111') {

                // a few messages before going to next task
                this.setState({
                    showInput: 'notShow',
                    showButton: 'notShow'
                });
                this.sayError('А вот и фигушки!!!', 200);
                this.sayError('Ладно, ладно. Шучу :)', 2000);

                // go to task2
                var goToNext = function() {
                    this.setState({
                        pageId: 'task2',
                        showVideo: 'show',
                        showQuestion: 'notShow',
                        taskDescription: 'Как Вы уже слышали, после крушения Морган спасся на необитаемом острове. ' +
                        'В этом задании тебе нужно найти послание, которое Морган отправил в надежде, что нашедший послание спасет его. ' +
                        'А как ты знаешь, все пираты попавшие на необитаемый остов, отправляют свои послание в запечатанных бутылках. ' +
                        'Найди бутылку в самом морском месте квартиры, и Морган на бутылке поведает тебе свой секрет. ' +
                        'В ответ на это задание Вы должены сообщить мне координаты острова, на котором Морган закопал свой клад.',
                        taskHandler: this.task2,
                        taskVideo: require('../video/task2.mp4'),
                        button: 'Попытка не пытка'
                    });
                    // clean
                    this.refs.answer.value = '';
                }.bind(this);

                setTimeout(function() {
                    this.setState({
                        taskDescription: 'Так держать Козявки, правильно! Вот Вам номер +375-297-23-18-05, позвоните по нему и спроси Одноглазого ДЖО. ' +
                        'Он-то и скажет Вам, где спрятана первая часть карты. Ха-Ха-Ха!',
                        taskHandler: goToNext,
                        button: 'Вперед',
                        showButton: 'show',
                        error: ''
                    });
                }.bind(this), 5000);
            } else {
                this.setState({
                    error: 'У кого-то ручки-крючки, пробуйте ещё раз'
                });
            }
        },

        /**
         * Checks entered answer for second task.
         *
         * @param event
         */
        task2: function (event) {
            console.log('>> Отвечаем на второе задание и пытаемся перейти к следующему заданию');

            // right code
            if (this.refs.answer.value === '222') {

                // a few messages before going to next task
                this.setState({
                    showInput: 'notShow',
                    showButton: 'notShow'
                });
                this.sayError('Пук-пук-пук!!!', 200);
                this.sayError('Так уж и быть идем дальше', 2000);

                // go to task3
                var goToNext = function() {
                    this.setState({
                        pageId: 'task3',
                        showVideo: 'show',
                        showQuestion: 'notShow',
                        taskDescription: 'Если Вы настоящие пираты, то должны знать, что среди пиратов существует негласное соревнование «за чью поимку запросят большее вознаграждение». ' +
                        'Такие объявления обычно вешают в тавернах, где люди едят и всегда могут обратить внимание. ' +
                        'Мое задание: найди у себя объявление о моем розыске, сумму за мою поимку умножь на количество якорей в бухте мертвеца и прибавь количество флагов на приглашении, ' +
                        'внизу которого нарисованы ЯДРО, ШТУРВАЛ, ЧЕРЕП',
                        taskHandler: this.task3,
                        taskVideo: require('../video/task3.mp4'),
                        button: 'Не промахнись'
                    });
                    // clean
                    this.refs.answer.value = '';
                }.bind(this);

                setTimeout(function() {
                    this.setState({
                        taskDescription: 'Отлично, теперь я смогу найти сокровища Моргана, спасибо Вам, Вы оказались более полезеными, чем я ожидал. ' +
                        'Часть карты находится в большой синей книге у вас в комнате. Йо-Хо-Хо и бутылка рома!!!',
                        taskHandler: goToNext,
                        button: 'Погнали',
                        showButton: 'show',
                        error: ''
                    });
                }.bind(this), 5000);
            } else {
                this.setState({
                    error: 'Ой-Ой, снова ручки-крючки, думайте'
                });
            }
        },

        /**
         * Checks entered answer for third task.
         *
         * @param event
         */
        task3: function (event) {
            console.log('>> Отвечаем на третье задание и пытаемся перейти к следующему заданию');

            // right code
            if (this.refs.answer.value === '333') {

                // a few messages before going to next task
                this.setState({
                    showInput: 'notShow',
                    showButton: 'notShow'
                });
                this.sayError('Пук-пук-пук!!!', 200);
                this.sayError('Так уж и быть идем дальше', 2000);

                // go to task4
                var goToNext = function() {
                    this.setState({
                        pageId: 'task4',
                        showVideo: 'show',
                        showQuestion: 'notShow',
                        taskDescription: 'Пираты очень суеверный народ, и когда я был на африканском континенте, одна гадалка ВУДУ под страхом смерит сказала мне, ' +
                        'что я обрету величайшую силу, когда стану обладателем заклятия. В своем видении она увидела, что заклинание это было выбито на неком предмете ' +
                        'круглой формы темного цвета, на одной из сторон предмета изображена смерть, а на другой стороне написано само заклятие. ' +
                        'Конечно, откуда старой гадалке из глухой деревни знать, что она описала в точности черную метку, и именно ту, ' +
                        'которую мне вручили на корабле «Летучего голландца». ' +
                        'Узнайте заклятие и сообщите его мне, взамен я расскажу, где спрятана часть карты. ' +
                        'Ах, да, чуть не забыл, гадалка сказала, что видит этот предмет в темном месте. ' +
                        'К этому месту можно пройти от книжного шкафа семь шагов к двери и 14 шагов к спальне. Сам не пойму о чем идет речь, но думаю, Вы решишь это задание, ведь части карты еще у меня!',
                        taskHandler: this.task4,
                        taskVideo: require('../video/task4.mp4'),
                        button: 'Не заблудитесь'
                    });
                    // clean
                    this.refs.answer.value = '';
                }.bind(this);

                setTimeout(function() {
                    this.setState({
                        taskDescription: 'Ух, ты! Вы все правильно посчитали, а мы-то думали, никто никогда не сможет пройти это задание. ' +
                        'Пираты привыкли полагаться на свою силу, а не на ум. Часть карты спрятана в стиральной машинке. Буль-Буль-Буль.',
                        taskHandler: goToNext,
                        button: 'Понеслась',
                        showButton: 'show',
                        error: ''
                    });
                }.bind(this), 5000);
            } else {
                this.setState({
                    error: 'Включи мозги, если они у тебя есть. Ха-ха-ха'
                });
            }
        },


        task4: function (event) {
            console.log('>> Отвечаем на четвертое задание и пытаемся перейти к следующему заданию');

            // right code
            if (this.refs.answer.value === '444') {

                // a few messages before going to next task
                this.setState({
                    showInput: 'notShow',
                    showButton: 'notShow'
                });
                this.sayError('Да чтож, это такое?!', 200);
                this.sayError('Ну, ладно, пошли дальше. Это еще не все!', 2000);

                // go to task5
                var goToNext = function() {
                    this.setState({
                        pageId: 'task5',
                        showVideo: 'show',
                        showQuestion: 'notShow',
                        taskDescription: 'Однажды я прибыл в один из самый удаленный порт Карибского моря, в такой дальний, что язык местного населения трудно было понять. ' +
                        'Выпив пару кружек настоящего рома, на выходе из трактира, ко мне обратился нищий старик. Он попросил у меня немного денег и, поскольку я имел при себе хороший улов и от хорошего настроения, ' +
                        'я подал бедняге пару дублонов. Такой щедрости старик удивился и, в благодарность, стал рассказывать мне, что знает секрет,  как найти сокровища Черной бороды. ' +
                        'Он сказал, что «ключ» к сокровищам Черной Бороды, можно найти с помощью его Бортового журнала, который ведет каждый капитан судна. ' +
                        'Тогда я не придал значения рассказам старика, но сейчас меня мучает мысль, что, возможно, он был прав! ' +
                        'Твое задание - найти Бортовой журнал Черной бороды. Все что я знаю, он спрятан в какой- то старой библиотеке. Сообщи мне остров, на котором Черная борода закопал свой клад, ' +
                        'и я расскажу тебе, где спрятана часть карты.',
                        taskHandler: this.task5,
                        taskVideo: require('../video/task5.mp4'),
                        button: 'Ноги в руки'
                    });
                    // clean
                    this.refs.answer.value = '';
                }.bind(this);

                setTimeout(function() {
                    this.setState({
                        taskDescription: 'Вот это да!!! С вашей помощью я стал еще богаче чем раньше! Конечно мне придется еще поискать эти сокровища на остове, ' +
                        'но у меня просто нюх на золотишко и я быстро его найду! Ах, да, Вам надо сказать где часть карты? ' +
                        'Ммм.. дай-ка  подумать, кажется, я спрятал ее в почтовом ящике. Чики-пуки-барамбуки',
                        taskHandler: goToNext,
                        button: 'Прыг-скок по лестнице',
                        showButton: 'show',
                        error: ''
                    });
                }.bind(this), 5000);
            } else {
                this.setState({
                    error: 'Привет, балбесам'
                });
            }
        },

        task5: function (event) {
            console.log('>> Отвечаем на пятое задание и пытаемся перейти к следующему заданию');
            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Задание №6: необходимо ответить на вопрос 6666',
                taskHandler: this.task6,
                taskVideo: require('../video/task6.mp4')
            })
        },

        task6: function (event) {
            console.log('>> Отвечаем на последнее задание');
            this.setState({
                showVideo: 'show',
                showQuestion: 'notShow',
                taskDescription: 'Спасибо Вы успешно справились со всеми заданиями',
                taskHandler: function () {
                    alert(1234);
                },
                taskVideo: 'stop'
            })
        },

        videoEnded: function () {
            console.log(">> Закончено видео на странице:" + this.state.pageId);
            this.setState({
                showVideo: 'notShow',
                showQuestion: 'show'
            });
            if (this.state.pageId === 'task2' || this.state.pageId === 'task3' || this.state.pageId === 'task4') {
                this.setState({
                   showInput: 'show'
                });
            }
        },

        videoHandler: function (video) {
            video.addEventListener("ended", this.videoEnded);
        },

        render: function () {
            return (
                <div id="slide">
                    <div className="center">
                        <video id="video" autoPlay src={this.state.taskVideo} controls ref={this.videoHandler}
                               className={this.state.showVideo}>
                            <source src={this.state.taskVideo} type="video/mp4"/>
                            Ваш браузер не поддерживает видео.
                        </video>
                    </div>
                    <div id="question" className={this.state.showQuestion}>
                        <br/>
                        <div>
                            {this.state.taskDescription}
                        </div>
                        <div className={this.state.showInput}>
                            <label>Ответ:</label><input ref='answer' type="text"/>
                        </div>
                        <div className="error">{this.state.error}</div>
                        <button onClick={this.state.taskHandler} className={this.state.showButton}>{this.state.button}</button>
                    </div>
                </div>
            );
        }
    });

    ReactDOM.render(<Block />,
        document.getElementById('content'));

};