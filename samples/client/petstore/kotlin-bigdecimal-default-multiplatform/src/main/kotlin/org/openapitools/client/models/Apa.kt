/**
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 *
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package org.openapitools.client.models


import kotlinx.serialization.*
import kotlinx.serialization.descriptors.*
import kotlinx.serialization.encoding.*

/**
 * 
 *
 * @param bepa 
 * @param cepa 
 * @param depa 
 * @param epa 
 * @param fepa 
 * @param gepa 
 */
@Serializable
data class Apa (

    @SerialName(value = "bepa") @Required val bepa: kotlin.Double = (0).toDouble(),

    @SerialName(value = "cepa") @Required val cepa: kotlin.Double = (6.28318).toDouble(),

    @SerialName(value = "depa") val depa: kotlin.Double? = (71).toDouble(),

    @SerialName(value = "epa") val epa: kotlin.Double? = (-71).toDouble(),

    @Deprecated(message = "This property is deprecated.")
    @SerialName(value = "fepa") val fepa: kotlin.Double? = (100).toDouble(),

    @SerialName(value = "gepa") val gepa: kotlin.Double? = null

)
