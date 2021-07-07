const knex = require("../db/connection");

/**
 * Update Review
 * @param {*} newReview 
 * @returns 
 */
function update(newReview) {
    return knex("reviews")
      .where({ review_id: newReview.review_id })
      .update(newReview, ["*"])
      .then((data) => data[0]);
}

/**
 * Read by reviewId
 * @param {*} reviewId 
 * @returns 
 */
function read(reviewId) {
    return knex("reviews").select("*").where({ review_id: reviewId }).first();
}

/**
 * get critics by criticId
 * @param {*} criticId 
 * @returns 
 */
function getCriticById(criticId) {
    return knex("critics").select("*").where({ critic_id: criticId }).first();
}

/**
 * Delete review by reviewId
 * @param {*} reviewId 
 * @returns 
 */
function destroy(reviewId) {
    return knex("reviews").where({ review_id: reviewId }).del();
}






