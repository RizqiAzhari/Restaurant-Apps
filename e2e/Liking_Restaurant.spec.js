Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/')
})

Scenario('showing empty liked restaurants', ({I}) => {
  I.amOnPage('/#/favorit')
  I.seeElement('.favorite-restaurant')
})

Scenario('liking one restaurant', ({I}) => {
  
  I.seeElement('.restaurant-name');
  I.click(locate('.read-more').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit');
  I.seeElement('.restaurant-name');
})

Scenario('disliking one restaurant', ({I}) => {
  
  I.seeElement('.restaurant-name');
  I.click(locate('.read-more').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit');
  I.seeElement('.restaurant-name');
  I.click(locate('.read-more').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit');
  I.seeElement('.favorite-restaurant');
})
