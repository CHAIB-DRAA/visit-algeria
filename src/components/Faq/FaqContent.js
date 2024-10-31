"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = () => {
  return (
      <>
        <div className="faq-area ptb-100">
          <div className="container">
            <div className="section-title">
              <h2>Questions Fréquemment Posées sur la Visite en Algérie</h2>
            </div>

            <Accordion className="accordion-list" preExpanded={["a"]}>
              <AccordionItem uuid="g">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Le visa est-il obligatoire pour entrer en Algérie ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Oui, un visa est obligatoire pour la plupart des voyageurs souhaitant entrer en Algérie.
                    Les citoyens de pays comme la France, l'Espagne, l'Italie et le Canada doivent obtenir
                    un visa avant leur arrivée. Il est recommandé de vérifier les exigences spécifiques
                    en fonction de votre nationalité auprès de l'ambassade ou du consulat algérien.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="h">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Quels sont les types de visas disponibles pour l'Algérie ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    L'Algérie propose plusieurs types de visas, notamment :
                  </p>
                  <ul>
                    <li><strong>Visa touristique :</strong> pour les séjours temporaires.</li>
                    <li><strong>Visa d'affaires :</strong> pour les voyages professionnels.</li>
                    <li><strong>Visa étudiant :</strong> pour les études en Algérie.</li>
                  </ul>
                  <p>
                    Assurez-vous de choisir le bon type de visa en fonction de votre objectif de visite.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="i">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Quelle est la monnaie utilisée en Algérie ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    La monnaie officielle en Algérie est le dinar algérien (DZD). Il est recommandé de
                    changer votre monnaie dans les banques ou les bureaux de change pour obtenir les
                    meilleurs taux. Les cartes de crédit sont acceptées dans de nombreux endroits,
                    mais il est conseillé d'avoir de l'argent liquide, surtout dans les zones rurales.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Quels sont les meilleurs mois pour visiter l'Algérie ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Les meilleurs mois pour visiter l'Algérie sont généralement de
                    mars à mai et de septembre à novembre. Ces périodes offrent un
                    climat agréable, idéal pour explorer les sites historiques et
                    profiter des paysages.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Quelles sont les principales attractions à visiter en Algérie ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    L'Algérie est riche en attractions, notamment la Casbah d'Alger,
                    les ruines romaines de Timgad et Djemila, le désert du Sahara,
                    ainsi que les paysages côtiers à Oran et Mostaganem. Chaque région
                    a ses propres merveilles à découvrir.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Quelles langues sont parlées en Algérie ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    La langue officielle est l'arabe, mais le berbère est également reconnu.
                    Le français est largement utilisé, en particulier dans les affaires et
                    l'éducation, ce qui facilite la communication pour les touristes.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Quel est le meilleur moyen de se déplacer en Algérie ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Les transports en commun, comme les bus et les trains, sont disponibles
                    et relativement abordables. Pour plus de confort, envisagez de louer une
                    voiture ou d'utiliser des services de taxi, surtout dans les zones moins
                    desservies.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Y a-t-il des précautions à prendre pour la sécurité ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Comme dans tout pays, il est important de rester vigilant. Suivez
                    les conseils des autorités locales, évitez les zones à risque et
                    renseignez-vous sur les us et coutumes pour respecter la culture locale.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="f">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Quel type de vêtements devrais-je emporter ?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Prévoyez des vêtements légers et confortables pour le climat chaud,
                    ainsi que des vêtements plus chauds pour les nuits dans le désert.
                    Il est conseillé de porter des vêtements modestes pour respecter
                    la culture locale, surtout dans les zones rurales.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </>
  );
};

export default FaqContent;
