//�벻Ҫ����ά����δ��룬���������֪��������ʲô��������һ���ܺõķ����� ----wfjsw
//total_hours_wasted_here = 4

var Telegram = require('telegram-bot');
var tg = new Telegram('<Give me your token>'); //TODO: Make this progress automatic.
var sessions = {
    "file_android": "",
    "file_ios": "",
    "file_desktop": ""
    };


tg.on('message', function(msg) {

    //Process File Uploading.
    if (msg.document) {
        tg.sendMessage({
            text: "[Dev Function]�������ҷ�������������ļ��� file_id",
            chat_id: msg.chat.id
        });
        tg.sendMessage({
            text: msg.document.file_id,,
            chat_id: msg.chat.id
        });
        return;
    }
    //End of the sub process.

    //Process Commands.
    if (msg.text) {
        switch(msg.text)
        {
            case "/start":
                tg.sendMessage({
                    text: "���ã���ӭ���� telegram-zhCN ��Ŀ������֧�ֻ����ˡ�\n�ҵ�ʹ���������������µ� Telegram �����ļ���ͬʱΪ���ṩ����֧�֡�\n������ʹ���������",
                    chat_id: msg.chat.id
                });
                tg.sendMessage({
                    text: "/help����ȡ�������ĵ�\n/getandroid����ȡAndroid�淭��\n/getios����ȡiOS�淭��\n/getdesktop����ȡDesktop�淭��\n/contact����ȡ�����˵���ϵ��ʽ������������һЩ���⣬��ֻ��Ϊ�˽�������������w\n/contrib����ȡ���ڲ������Ŀ����Ϣ",
                    chat_id: msg.chat.id
                });
                tg.sendMessage({
                    text: "��ע�� Telegram ���һֱ��Ϊʵ�ָ��๦�ܶ����£�δ���ҽ�������֪ͨ������µ�ְ�𣬵���ǰ��ֻ��ͨ������ http://telegram-china.org ��վ����ȡ���°������������º���ص��������������µķ����ļ���",
                    chat_id: msg.chat.id
                });
                break;
            case "/help":
                tg.sendMessage({
                    text: "���ã���ӭ���� telegram-zhCN ��Ŀ������֧�ֻ����ˡ�\n�ҵ�ʹ���������������µ� Telegram �����ļ���ͬʱΪ���ṩ����֧�֡�\n������ʹ���������",
                    chat_id: msg.chat.id
                });
                tg.sendMessage({
                    text: "/help����ȡ�������ĵ�\n/getandroid����ȡAndroid�淭��\n/getios����ȡiOS�淭��\n/getdesktop����ȡDesktop�淭��\n/contact����ȡ�����˵���ϵ��ʽ������������һЩ���⣬��ֻ��Ϊ�˽�������������w\n/contrib����ȡ���ڲ������Ŀ����Ϣ",
                    chat_id: msg.chat.id
                });
                tg.sendMessage({
                    text: "��ע�� Telegram ���һֱ��Ϊʵ�ָ��๦�ܶ����£�δ���ҽ�������֪ͨ������µ�ְ�𣬵���ǰ��ֻ��ͨ������ http://telegram-china.org ��վ����ȡ���°������������º���ص��������������µķ����ļ���",
                    chat_id: msg.chat.id
                });
                break;
            case "/getandroid":
                if (sessions.file_android!="") {
                    tg.sendMessage({
                        text: "���������������� Android ��������ļ�����������֮�������ļ������Ͻ������㣬ѡ��Apply Localization File��Ӧ�ñ��ػ��ļ�������Ȼ��ѡ�񡰼������ġ���",
                        chat_id: msg.chat.id
                    });
                    tg.sendDocument({
                        document: sessions.file_android,
                        chat_id: msg.chat.id
                    });
                }
                else {
                    tg.sendMessage({
                        text: "�Բ���Android ���뵱ǰû��׼���á�����ϵ @wfjsw ��ȡ���顣",
                        chat_id: msg.chat.id
                    });
                }
                break;
            case "/getios":
                if (sessions.file_ios!="") {
                    tg.sendMessage({
                        text: "���������������� iOS ��������ļ�����������֮�������ļ���ѡ��Apply Localization File��Ӧ�ñ��ػ��ļ�������Ȼ��ѡ�񡰼������ġ���",
                        chat_id: msg.chat.id
                    });
                    tg.sendDocument({
                        document: sessions.file_ios,
                        chat_id: msg.chat.id
                    });
                }
                else {
                    tg.sendMessage({
                        text: "�Բ���iOS ���뵱ǰû��׼���á�����ϵ @wfjsw ��ȡ���顣",
                        chat_id: msg.chat.id
                    });
                }
                break;
            case "/getdesktop":
                if (sessions.file_desktop!="") {
                    tg.sendMessage({
                        text: "���������������� ���� ��������ļ�����������֮���䱣�浽Ӳ���ϡ�����������ϵġ�Settings(����)���������ҵ���Change Language(��������)����ס�����ϵ�Alt+Shift����������ڴ򿪵ĶԻ������ҵ��ո����صġ�Localizable.strings���ļ����򿪡�",
                        chat_id: msg.chat.id
                    });
                    tg.sendDocument({
                        document: sessions.file_desktop,
                        chat_id: msg.chat.id
                    });
                }
                else {
                    tg.sendMessage({
                        text: "�Բ������� �淭�뵱ǰû��׼���á�����ϵ @wfjsw ��ȡ���顣",
                        chat_id: msg.chat.id
                    });
                }
                break;
            case "/contact":
                break;
            case "/contrib":
                break;
            default:
                var actionregex = /^\/set(android|ios|desktop){1}\s(.+)$/;
                if (actionregex.test(msg.text)) {
                    var matchresult = actionregex.exec(msg.text);
                    switch(matchresult[1]) {
                        case "android":
                            sessions.file_android = matchresult[2];
                            tg.sendMessage({
                                text: "Upload Android OK",
                                chat_id: msg.chat.id
                            });
                            break;
                        case "ios":
                            sessions.file_ios = matchresult[2];
                            tg.sendMessage({
                                text: "Upload iOS OK",
                                chat_id: msg.chat.id
                            });
                            break;
                        case "desktop":
                            sessions.file_desktop = matchresult[2];
                            tg.sendMessage({
                                text: "Upload Desktop OK",
                                chat_id: msg.chat.id
                            });
                            break;
                        default:
                            tg.sendMessage({
                                text: "��ʽ���������������롣",
                                chat_id: msg.chat.id
                            });

                    }
                }
                else
                {
                    tg.sendMessage({
                    text: "�Բ����Ҳ�֪������˵ʲô����ظ�/help��ȡ��������ظ�/contact���Ҹ���������('?��?')",
                    chat_id: msg.chat.id
                    });
                }
        }
    }
    //End of the sub process.
});

tg.start();