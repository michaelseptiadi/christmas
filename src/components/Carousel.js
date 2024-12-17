import { useState } from 'react';
import { Carousel, Form, Button, Alert, Image } from 'react-bootstrap';
import Crocs from '../assets/crocs.svg'
import CK from '../assets/ck.svg'
import '../App.css'

function ControlledCarousel() {
    const [message, setMessage] = useState('')
    const [show, setShow] = useState(false)
    const [messageSend, setMessageSend] = useState(false);
    const [gift, setGift] = useState('')
    const [other, setOther] = useState('')
    const [giftSend, setGiftSend] = useState(false)
    const [quesOne, setQuesOne] = useState('')
    const [quesTwo, setQuesTwo] = useState('')
    const [quesThree, setQuesThree] = useState('')
    const [doneQues, setDoneQues] = useState(false)

    const sendMessage = () => {
        if (message.length < 300) {
            setShow(true)
        }else{
            setMessageSend(true)
            window.open("https://wa.me/62895372477784/?text="+message, "_blank");
        }
    }
    const sendGift = () => {
        if(gift === 'OTHER'){
            window.open("https://wa.me/62895372477784/?text=aku%20mau%20"+other, "_blank");
        }else{
            window.open("https://wa.me/62895372477784/?text=aku%20mau%20"+gift, "_blank");
        }
        setGiftSend(true);
    }

    const sendQues = () => {
        if(quesOne === '' || quesTwo === '' || quesThree === ''){
            alert('ADA YANG BELOM DIISI')
        }else{
            let message = `PANGGILAN MEKEL ${quesOne}.
            MAKANAN KESUKAAN MEKEL ${quesTwo}.
            BARANG YANG LAGI MEKEL MAU ${quesThree}`
            window.open("https://wa.me/62895372477784/?text="+message, "_blank");
            setDoneQues(true)
        }
    }

    return (
        <div>
            <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>KURANG PANJANG... KAMU TEXTNYA BARU {message.length} HURUF.</Alert.Heading>
            </Alert>
            <Carousel>
                <Carousel.Item interval={100000}>
                    <div className="carousel-container">
                        <div className="text-container">
                            <h3 style={{ fontFamily: "Mountains of Christmas", fontWeight: '700', fontSize: '64px' }}> Hi, Loisa Patricia</h3>
                            <p style={{ fontSize: '20px' }}>This website is for you. You can scroll through this page until the end.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={100000}>
                    <div className="carousel-container">
                        <div className="text-container">
                            <h3 style={{ fontFamily: "Mountains of Christmas", fontWeight: '700', fontSize: '64px' }}> Merry Christmas!!!&#128150;&#9924;</h3>
                            <p style={{ fontSize: '20px' }}>This season feels even more magical because I have you by my side. <br /> You are the greatest gift I could ever ask for, and every moment with you feels like a dream come true.<br /> <br /> Thank you for filling my life with love, joy, and laughter. I hope this Christmas brings you as much happiness as you’ve brought into my life. I can’t wait to create more beautiful memories with you.<br /> <br /> I love you more than words can say. Wishing you the warmest and happiest Christmas ever!.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-container">
                        <div className="text-container">
                            <h3 style={{ fontFamily: "Mountains of Christmas", fontWeight: '700', fontSize: '48px' }}>Tell Me Something, What do u want to say for me?</h3>
                            <Form.Control as="textarea" rows={8} onChange={e => setMessage(e.target.value)} />
                            <Button variant="success" onClick={sendMessage}>Send To Michael Septiadi.</Button>
                        </div>
                    </div>
                </Carousel.Item>
                { messageSend ?
                    <Carousel.Item interval={100000}>
                        <div className="carousel-container">
                            <div className="text-container">
                                <h3 style={{ fontFamily: "Mountains of Christmas", fontWeight: '700', fontSize: '48px' }}>{messageSend ? 'Sekarang kita lihat ada pilihan hadiah apa aja yaa yang akan aku kasih.....' : 'Kirim Dulu Ih Pesannya'}</h3>
                            </div>
                        </div>
                    </Carousel.Item> : ''
                }
                { messageSend ?
                    <Carousel.Item interval={100000}>
                        <div className="carousel-container">
                            <div className="text-container">
                                <h3 style={{ fontFamily: "Mountains of Christmas", fontWeight: '700', fontSize: '36px' }}>BENTAR DULU, TIDAK SEGAMPANG ITU DONG!!! JAWAB DULU PERTANYAAN INI</h3>
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>SEBUTKAN 3 SEBUTAN SAYANG UNTUK MEKEL</Form.Label>
                                        <Form.Control type="text" placeholder="SEBUTINNNNN" onChange={e => setQuesOne(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>SEBUTKAN 3 MAKANAN KESUKAAN MEKEL</Form.Label>
                                        <Form.Control type="text" placeholder="SEBUTINNNNN" onChange={e => setQuesTwo(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>SEBUTKAN BARANG YANG LAGI DI MAU SAMA MEKEL YANG KAMU TAU</Form.Label>
                                        <Form.Control type="text" placeholder="SEBUTINNNNN" onChange={e => setQuesThree(e.target.value)}/>
                                    </Form.Group>
                                </Form>
                                <Button variant="success" onClick={sendQues}>Send To Michael Septiadi</Button> : ''
                            </div>
                        </div>
                    </Carousel.Item> : ''
                }
                {
                    doneQues ?
                    <Carousel.Item interval={100000}>
                        <div className="carousel-container">
                            <div className="text-container">
                                <h3 style={{ fontFamily: "Mountains of Christmas", fontWeight: '700', fontSize: '36px' }}>NAHHH INI SAATNYAAA LOISA MEMILIHHHH</h3>
                            </div>
                        </div>
                    </Carousel.Item> : ''
                }
                { doneQues ?
                    <Carousel.Item interval={100000}>
                        <div className="carousel-container">
                            <div className="text-container">
                                <Form.Check
                                    type={'radio'}
                                    id={`CROCS-radio`}
                                    name="gift"
                                    value="CROCS"
                                    checked={gift === "CROCS"}
                                    onChange={ e => setGift(e.target.value)}
                                />
                                <Image src={Crocs} rounded />
                                <Form.Check
                                    type={'radio'}
                                    id={`CK-radio`}
                                    name="gift"
                                    value="CK"
                                    checked={gift === "CK"}
                                    onChange={ e => setGift(e.target.value)}
                                />
                                <Image src={CK} rounded style={{margin: '16px 0'}}/>
                                <Form.Check
                                    type={'radio'}
                                    id={`OTHER-radio`}
                                    name="gift"
                                    value="OTHER"
                                    checked={gift === "OTHER"}
                                    onChange={ e => setGift(e.target.value)}
                                />
                                { gift === 'OTHER' ? 
                                    <Form.Control
                                        type="text"
                                        placeholder="Kamu maunya apa?"
                                        aria-label="Mau apa kamu?"
                                        onChange={ e => setOther(e.target.value)}
                                        style={{marginTop: '16px'}}
                                    /> : ''
                                }
                                {gift === 'CROCS' || gift === 'CK' || (gift === 'OTHER' && other !== '') ?
                                    <Button variant="success" onClick={sendGift}>Send To Michael Septiadi</Button> : ''
                                }
                            </div>
                        </div>
                    </Carousel.Item> : ''
                }
                {
                    giftSend ? 
                    <Carousel.Item interval={100000}>
                        <div className="carousel-container">
                            <div className="text-container">
                                <h3 style={{ fontFamily: "Mountains of Christmas", fontWeight: '700', fontSize: '64px' }}>Kamu udah pilih {gift !== 'OTHER' ? gift : other} buat hadiahnya yaa, GABOLEH DIGANTI</h3>
                            </div>
                        </div>
                    </Carousel.Item> : ''
                }
                {
                    giftSend ? 
                    <Carousel.Item interval={100000}>
                        <div className="carousel-container">
                            <div className="text-container">
                                <h3 style={{ fontFamily: "Mountains of Christmas", fontWeight: '700', fontSize: '64px' }}>Terimakasihhh LOISA PATRICIA sudah mau mengerjakan semuanya.<br/><br/>GOODBYEEEEE!!!!!</h3>
                            </div>
                        </div>
                    </Carousel.Item> : ''
                }
            </Carousel>
        </div>
    );
}

export default ControlledCarousel;