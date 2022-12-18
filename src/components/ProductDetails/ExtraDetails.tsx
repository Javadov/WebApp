import React, { useState } from 'react';

const Tabs = () => {

    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Description',
            content: [<>
                        Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.
                        <li> Village did removed enjoyed explain nor ham saw calling talking</li>
                        <li>Securing as informed declared or margaret.</li>
                        <li>Joy horrible moreover man feelings own shy.</li>
                        On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. 
                    </>]
            
        },
        {
            id: 2,
            tabTitle: 'Additional',
            content: [<table className="table table--size-guide table--layout text-center mb-24"><thead><tr className="table__row table__row--head"><th className="table__cell table__cell--head"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">Storlek</span></th><th className="table__cell table__cell--head"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">EU</span></th><th className="table__cell table__cell--head"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">Byst (cm)</span></th><th className="table__cell table__cell--head"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">Midja (cm)</span></th><th className="table__cell table__cell--head"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">Höfter (cm)</span></th><th className="table__cell table__cell--head"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">Stuss (cm)</span></th></tr></thead><tbody><tr className="table__row"><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop"></span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">32</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">76</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">62</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">81</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">88</span></td></tr><tr className="table__row"><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">XS</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">34/36</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">80-84</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">65-68</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">84-87</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">91-94</span></td></tr><tr className="table__row"><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">S</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">36/38</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">84-88</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">68-71</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">87-90</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">94-97</span></td></tr><tr className="table__row"><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">M</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">38/40</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">88-92</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">71-75</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">90-93</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">97-100</span></td></tr><tr className="table__row"><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">L</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">40/42</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">92-96</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">75-79</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">93-96</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">100-103</span></td></tr><tr className="table__row"><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">XL</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">42/44</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">96-100</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">79-83</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">96-100</span></td><td className="table__cell"><span className="typography typography--caption typography--caption--caption1 typography--caption--lineheight-paragraph typography--color-strong typography--weight-regular typography--desktop">103-107</span></td></tr></tbody></table>]
        },
        {
            id: 3,
            tabTitle: 'Shopping & Returns',
            content: [<div className='__retur'>
                        <div id="frakt">
                            Fri och snabb frakt
                            Gäller på beställningar över 499kr. Ditt paket kommer att anlända inom 1-2 vardagar till ditt önskade utlämningsställe eller hemma hos dig. Läs mer                       
                        </div>
                        <div id="retur">
                            Fria returer
                            Önskar du att returnera ditt köp? Vi erbjuder 30 dagars enkel och fri retur med en retursedel som är inkluderad i paketet. Läs mer
                        </div>
                        <div id="byte">
                            Enkla byten av gåvor
                            Logga in på Mitt Boozt och skapa ett presentkvitto. Läs mer
                        </div>
                        <div id="faq">
                            Mer information
                            Hitta snabba svar på dina frågor på våra kundservicesidor. Kundservice och FAQ
                        </div>
                    </div>
                    ]
        },
        {
            id: 4,
            tabTitle: 'Reviews',
            content: [<> 
                        <strong>Mycket snabb service och leverans</strong> 
                        Mycket snabb service och leverans. Lätt att handla.
                        Kristina,
                        2 dagar sedan
                      </>]
        }
    ];

    const handleTabClick = (e:any) => {
        setCurrentTab(e.target.id);
    }

    return (
        <div className='__extradetails'>
            <div className='container'>
                <div className='tabs'>
                    {tabs.map((tab, i) =>
                        <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                    )}
                </div>
                <div className='content'>
                    {tabs.map((tab, i) =>
                        <div key={i}>
                            {currentTab === `${tab.id}` && <div><p>{tab.content}</p></div>}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Tabs;