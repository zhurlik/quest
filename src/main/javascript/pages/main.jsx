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
                'Вы должны ТОЧНО посчитать, сколько ступенек в вашем доме. И это число будет первой частью кода. ' +
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
         * Common logic for all tasks.
         *
         * @param params
         */
        handleAnswerAndDisplayMessages: function (params) {
            // right code
            if (this.refs.answer.value === params.answer.correctValue) {

                // a few messages before going to next task
                this.setState({
                    showInput: 'notShow',
                    showButton: 'notShow'
                });
                this.sayError(params.answer.joke1, 200);
                this.sayError(params.answer.joke2, 2000);

                // go to next
                var goToNext = function () {
                    if (params.nextTask.pageId !=='finish') {
                        this.setState({
                            pageId: params.nextTask.pageId,
                            showVideo: 'show',
                            showQuestion: 'notShow',
                            taskDescription: params.nextTask.desc,
                            taskHandler: params.nextTask.handler,
                            taskVideo: params.nextTask.video,
                            button: params.nextTask.button
                        });

                        // clean
                        this.refs.answer.value = '';
                    } else {
                        this.finish()
                    }
                }.bind(this);

                setTimeout(function () {
                    this.setState({
                        taskDescription: params.answer.help,
                        taskHandler: goToNext,
                        button: params.answer.goNext,
                        showButton: 'show',
                        error: ''
                    });
                }.bind(this), 5000);
            } else {
                this.setState({
                    error: params.answer.badAnswer
                });
            }
        },

        /**
         * To check entered answer for first task.
         *
         * @param event
         */
        task1: function (event) {
            console.log('>> Отвечаем на первое задание и пытаемся перейти к следующему заданию');

            this.handleAnswerAndDisplayMessages({
                answer: {
                    correctValue: '111',
                    joke1: 'А вот и фигушки!!!',
                    joke2: 'Ладно, ладно. Шучу :)',
                    help: 'Так держать Козявки, правильно! Вот Вам номер +375-297-23-18-05, позвоните по нему и спроси Одноглазого ДЖО. ' +
                    'Он-то и скажет Вам, где спрятана первая часть карты. Ха-Ха-Ха!',
                    goNext: 'Вперед',
                    badAnswer: 'У кого-то ручки-крючки, пробуйте ещё раз'
                },
                nextTask: {
                    pageId: 'task2',
                    desc: 'Как Вы уже слышали, после крушения Морган спасся на необитаемом острове. ' +
                    'В этом задании тебе нужно найти послание, которое Морган отправил в надежде, что нашедший послание спасет его. ' +
                    'А как ты знаешь, все пираты попавшие на необитаемый остов, отправляют свои послание в запечатанных бутылках. ' +
                    'Найди бутылку в самом морском месте квартиры, и Морган на бутылке поведает тебе свой секрет. ' +
                    'В ответ на это задание Вы должены сообщить мне координаты острова, на котором Морган закопал свой клад.',
                    handler: this.task2,
                    video: require('../video/task2.mp4'),
                    button: 'Попытка не пытка'
                }
            });
        },

        /**
         * Checks entered answer for second task.
         *
         * @param event
         */
        task2: function (event) {
            console.log('>> Отвечаем на второе задание и пытаемся перейти к следующему заданию');

            this.handleAnswerAndDisplayMessages({
                answer: {
                    correctValue: '222',
                    joke1: 'Пук-пук-пук!!!',
                    joke2: 'Так уж и быть идем дальше',
                    help: 'Отлично, теперь я смогу найти сокровища Моргана, спасибо Вам, Вы оказались более полезеными, чем я ожидал. ' +
                    'Часть карты находится в большой синей книге у вас в комнате. Йо-Хо-Хо и бутылка рома!!!',
                    goNext: 'Погнали дальше',
                    badAnswer: 'Ой-Ой, снова ручки-крючки, думайте'
                },
                nextTask: {
                    pageId: 'task3',
                    desc: 'Если Вы настоящие пираты, то должны знать, что среди пиратов существует негласное соревнование «за чью поимку запросят большее вознаграждение». ' +
                    'Такие объявления обычно вешают в тавернах, где люди едят и всегда могут обратить внимание. ' +
                    'Мое задание: найди у себя объявление о моем розыске, сумму за мою поимку умножь на количество якорей в бухте мертвеца и прибавь количество флагов на приглашении, ' +
                    'внизу которого нарисованы ЯДРО, ШТУРВАЛ, ЧЕРЕП',
                    handler: this.task3,
                    video: require('../video/task3.mp4'),
                    button: 'Не промахнись'
                }
            });
        },

        /**
         * Checks entered answer for third task.
         *
         * @param event
         */
        task3: function (event) {
            console.log('>> Отвечаем на третье задание и пытаемся перейти к следующему заданию');

            this.handleAnswerAndDisplayMessages({
                answer: {
                    correctValue: '333',
                    joke1: 'А гавняшку Вам',
                    joke2: 'Оставить, поплыли дальше',
                    help: 'Ух, ты! Вы все правильно посчитали, а мы-то думали, никто никогда не сможет пройти это задание. ' +
                    'Пираты привыкли полагаться на свою силу, а не на ум. Часть карты спрятана в стиральной машинке. Буль-Буль-Буль.',
                    goNext: 'Понеслась',
                    badAnswer: 'Включи мозги, если они у тебя есть. Ха-ха-ха'
                },
                nextTask: {
                    pageId: 'task4',
                    desc: 'Пираты очень суеверный народ, и когда я был на африканском континенте, одна гадалка ВУДУ под страхом смерит сказала мне, ' +
                    'что я обрету величайшую силу, когда стану обладателем заклятия. В своем видении она увидела, что заклинание это было выбито на неком предмете ' +
                    'круглой формы темного цвета, на одной из сторон предмета изображена смерть, а на другой стороне написано само заклятие. ' +
                    'Конечно, откуда старой гадалке из глухой деревни знать, что она описала в точности черную метку, и именно ту, ' +
                    'которую мне вручили на корабле «Летучего голландца». ' +
                    'Узнайте заклятие и сообщите его мне, взамен я расскажу, где спрятана часть карты. ' +
                    'Ах, да, чуть не забыл, гадалка сказала, что видит этот предмет в темном месте. ' +
                    'К этому месту можно пройти от книжного шкафа семь шагов к двери и 14 шагов к спальне. ' +
                    'Сам не пойму о чем идет речь, но думаю, Вы решишь это задание, ведь части карты еще у меня!',
                    handler: this.task4,
                    video: require('../video/task4.mp4'),
                    button: 'Не заблудитесь'
                }
            });
        },

        task4: function (event) {
            console.log('>> Отвечаем на четвертое задание и пытаемся перейти к следующему заданию');

            this.handleAnswerAndDisplayMessages({
                answer: {
                    correctValue: '444',
                    joke1: 'Да чтож, это такое?!',
                    joke2: 'Ну, ладно, пошли дальше. Это еще не все!',
                    help: 'Вот это да!!! С вашей помощью я стал еще богаче чем раньше! Конечно мне придется еще поискать эти сокровища на остове, ' +
                    'но у меня просто нюх на золотишко и я быстро его найду! Ах, да, Вам надо сказать где часть карты? ' +
                    'Ммм.. дай-ка  подумать, кажется, я спрятал ее в почтовом ящике. Чики-пуки-барамбуки',
                    goNext: 'Прыг-скок по лестнице',
                    badAnswer: 'Привет, балбесам'
                },
                nextTask: {
                    pageId: 'task5',
                    desc: 'Однажды я прибыл в один из самый удаленный порт Карибского моря, в такой дальний, что язык местного населения трудно было понять. ' +
                    'Выпив пару кружек настоящего рома, на выходе из трактира, ко мне обратился нищий старик. Он попросил у меня немного денег и, ' +
                    'поскольку я имел при себе хороший улов и от хорошего настроения, ' +
                    'я подал бедняге пару дублонов. Такой щедрости старик удивился и, в благодарность, стал рассказывать мне, что знает секрет,  как найти сокровища Черной бороды. ' +
                    'Он сказал, что «ключ» к сокровищам Черной Бороды, можно найти с помощью его Бортового журнала, который ведет каждый капитан судна. ' +
                    'Тогда я не придал значения рассказам старика, но сейчас меня мучает мысль, что, возможно, он был прав! ' +
                    'Твое задание - найти Бортовой журнал Черной бороды. Все что я знаю, он спрятан в какой- то старой библиотеке. Сообщи мне остров, на котором Черная борода закопал свой клад, ' +
                    'и я расскажу тебе, где спрятана часть карты.',
                    handler: this.task5,
                    video: require('../video/task5.mp4'),
                    button: 'Ноги в руки'
                }
            });
        },

        task5: function (event) {
            console.log('>> Отвечаем на пятое задание и пытаемся перейти к следующему заданию');

            this.handleAnswerAndDisplayMessages({
                answer: {
                    correctValue: '555',
                    joke1: 'Упс, ошибочка...',
                    joke2: 'А может и не ошибочка',
                    help: 'Да Вы молодецы! Сам черт не нашел бы эту черную метку во всем белом свете. Из вас получатся отличные пираты! ' +
                    'Ну хорошо, хорошо, не буду утомлять тебя своей бессмысленными речами, часть карты спрятана у тебя под кроватью.',
                    goNext: 'Газуем дальше',
                    badAnswer: 'Предлагаю еще раз подумать'
                },
                nextTask: {
                    pageId: 'task6',
                    desc: 'Вот Вы и добрались до последнего задания. Ну что же, я постарался сделать это задание самым сложным из всех, ' +
                    'что Вам когда-либо доводилось решать. Решите это задание, и я отдам последнюю часть карты. Вот мое задание. ' +
                    'Большой Энциклопедический Словарь, стр1046, стр617, стр823, стр172, стр5, стр984, ь , стр430, стр776, стр823, стр1046, ' +
                    'стр1172, стр984, стр5, стр776, стр776, ы , стр1302, стр1046, стр617, стр823, стр172. Посмотрим, как Вы решите это задание!',
                    handler: this.task6,
                    video: require('../video/task6.mp4'),
                    button: 'Осталось чуть-чуть'
                }
            });
        },

        task6: function (event) {
            console.log('>> Отвечаем на последнее задание');

            this.handleAnswerAndDisplayMessages({
                answer: {
                    correctValue: '666',
                    joke1: 'А вот и не скажу',
                    joke2: 'Так уж и быть, только не плачте',
                    help: 'Обалдеть! Вы прошели все задания и нашели последнюю часть карты? ' +
                    'Ха-Ха-Ха, но она же пуста! Ну ладно, ладно, это была плохая шутка. Подержи последнюю часть карты над огнем и, может, это поможет тебе.',
                    goNext: 'Поздравление',
                    badAnswer: 'Жми еще раз'
                },
                nextTask: {
                    pageId: 'finish'
                }
            });
        },

        finish: function () {
            console.log('>> Поздравление!');
            this.setState({
                taskDescription: '',
                error: 'Пиф-Паф, Поздравляю С Днем Рождения!!!',
                showInput: 'notShow',
                showButton: 'notShow',
                showQuestion: 'final'
            });
        },

        videoEnded: function () {
            console.log(">> Закончено видео на странице:" + this.state.pageId);
            this.setState({
                showVideo: 'notShow',
                showQuestion: 'show'
            });
            if (this.state.pageId === 'task2' ||
                this.state.pageId === 'task3' ||
                this.state.pageId === 'task4' ||
                this.state.pageId === 'task5' ||
                this.state.pageId === 'task6') {
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
                        <button onClick={this.state.taskHandler}
                                className={this.state.showButton}>{this.state.button}</button>
                    </div>
                </div>
            );
        }
    });

    ReactDOM.render(<Block />,
        document.getElementById('content'));

};