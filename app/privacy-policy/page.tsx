'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, Server, Eye, Database, AlertCircle, Mail, Globe, Users, Scale } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen bg-slate-950 font-sans selection:bg-teal-500/30 selection:text-white">
      <Navbar />
      
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        
        {/* Header */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-md mb-6">
                <Shield className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-semibold text-teal-300">Privacy & Security</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Privacy Policy
            </h1>
            <p className="text-slate-400">Last updated: January 24, 2026</p>
        </motion.div>

        {/* Content Container */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 space-y-16"
        >
            {/* Introduction */}
            <section className="space-y-6">
                <p className="text-slate-300 leading-relaxed text-lg">
                    This Privacy Policy explains how <strong className="text-white">Doctors AI</strong> ("Company", "we", "us", "our") collects, uses, stores, shares, and protects information when you use our application ("Service" or "Application"). It also explains your rights and choices regarding that information.
                </p>
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex gap-4 items-start">
                    <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                    <div>
                        <h4 className="text-amber-400 font-semibold mb-1">Important — Local-first by default</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Doctors AI is built as a local-first application. Medical templates, patient forms, and generated reports are stored locally on your device by default and are encrypted at rest. We do not access or collect your medical data unless you explicitly choose to share or transmit it.
                        </p>
                    </div>
                </div>
            </section>

            {/* Definitions */}
            <section className="space-y-6">
                 <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-teal-500/20">
                        <Scale className="w-6 h-6 text-teal-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Interpretation and Definitions</h2>
                </div>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                    <h3 className="text-white font-semibold text-lg">Interpretation</h3>
                    <p>Capitalized words used in this Privacy Policy have the meanings defined below. Definitions apply in singular and plural forms.</p>
                    
                    <h3 className="text-white font-semibold text-lg mt-6">Definitions</h3>
                    <p>For the purposes of this Privacy Policy:</p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-teal-500">
                        <li><strong className="text-white">Account:</strong> A unique account created for You to access our Service or parts of our Service.</li>
                        <li><strong className="text-white">Application / Service:</strong> Refers to Doctors AI, the software provided by the Company.</li>
                        <li><strong className="text-white">Company:</strong> (also "We", "Us", "Our") refers to Doctors AI / Elpisverse.</li>
                        <li><strong className="text-white">Device:</strong> Any device that can access the Service (phone, tablet, computer).</li>
                        <li><strong className="text-white">Personal Data:</strong> Information that identifies or can be used to identify an individual.</li>
                        <li><strong className="text-white">PHI:</strong> Protected Health Information (sensitive medical data governed by laws like HIPAA).</li>
                        <li><strong className="text-white">Usage Data:</strong> Technical or diagnostic data related to your use of the Service.</li>
                        <li><strong className="text-white">You:</strong> The individual or legal entity using the Service.</li>
                    </ul>
                </div>
            </section>

            {/* Data Storage */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-teal-500/20">
                        <Database className="w-6 h-6 text-teal-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Data Storage & Privacy</h2>
                </div>
                
                <div className="p-5 rounded-xl bg-green-500/10 border border-green-500/20 mb-6">
                    <p className="text-green-200 text-sm">
                        <strong className="block mb-1 text-green-400">Local storage only (by default):</strong> 
                        Medical templates, reports, signatures and patient forms remain on your device and are stored using encrypted local storage. We do not read, transmit, or store this content on our servers unless you explicitly enable a sharing or cloud feature.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                        <h3 className="text-lg font-semibold text-white mb-3">What we store locally</h3>
                        <ul className="space-y-2 text-slate-400 text-sm list-disc pl-4 marker:text-teal-500">
                            <li>Templates you create</li>
                            <li>Patient reports and completed forms</li>
                            <li>User preferences and app settings</li>
                            <li>Doctor profile information (name, qualification, specialization)</li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                        <h3 className="text-lg font-semibold text-white mb-3">What we do NOT collect by default</h3>
                        <ul className="space-y-2 text-slate-400 text-sm list-disc pl-4 marker:text-blue-500">
                            <li>Your patient medical records or PHI</li>
                            <li>Report contents or template text stored locally</li>
                            <li>Digital signatures stored locally</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* AI Features */}
            <section className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                        <Server className="w-6 h-6 text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">AI Features & Processing</h2>
                </div>
                
                <div className="space-y-4 text-slate-400 leading-relaxed">
                    <p><strong className="text-white">Overview:</strong> Doctors AI may offer AI-powered features (for example, summaries, suggestions, diagnostic-assist text, or content generation). These features process input data to produce a response.</p>
                    
                    <h3 className="text-white font-semibold text-lg mt-4">Where processing can occur</h3>
                    <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                        <li><strong className="text-white">On-device:</strong> Whenever possible the app will perform AI processing locally on your device. Local processing keeps data on-device and is the preferred option for sensitive content.</li>
                        <li><strong className="text-white">Third-party AI providers:</strong> Some advanced AI capabilities may require sending the content you submit to third-party AI providers (cloud servers) for processing.</li>
                    </ul>

                    <h3 className="text-white font-semibold text-lg mt-4">What may be transmitted for AI processing</h3>
                    <p>The only data transmitted for AI processing is the content you explicitly submit to the AI feature (for example: textual notes, selected report fields, or images you choose to analyze). We advise you:</p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                        <li>Do not submit direct patient identifiers or any PHI to third-party AI services unless you have appropriate legal safeguards (e.g., a Business Associate Agreement) and explicit patient consent.</li>
                        <li>When possible, anonymize or remove identifiers before submitting data for off-device AI processing.</li>
                    </ul>

                    <h3 className="text-white font-semibold text-lg mt-4">Your controls with AI features</h3>
                    <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                        <li>Cloud-based AI features operate on an explicit, per-use basis. Data is processed externally only when you intentionally submit content for cloud-based AI processing. Choosing not to use these features results in no off-device data transmission.</li>
                        <li>You can review the specific data being sent before each AI request.</li>
                        <li>We do not use AI-submitted content for training our models unless we receive your explicit, separate opt-in consent and provide clear instructions on what is shared.</li>
                    </ul>
                </div>
            </section>

             {/* Personal Data Collection */}
             <section className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                        <Eye className="w-6 h-6 text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Collecting and Using Your Personal Data</h2>
                </div>
                
                <div className="space-y-6 text-slate-400 leading-relaxed">
                    <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Types of data collected</h3>
                        <h4 className="text-slate-200 font-medium mb-1">Personal Data (optional / support)</h4>
                        <p className="mb-2">If you contact us for support or create an account, we may collect:</p>
                        <ul className="list-disc pl-6 space-y-1 marker:text-purple-500">
                            <li>Email address</li>
                            <li>First and last name</li>
                            <li>Support messages or logs you provide (only with your consent)</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-slate-200 font-medium mb-1">Usage Data</h4>
                        <p>We may collect anonymous usage data (if enabled) to help improve the Service — for example, device type, OS version, app usage patterns, and crash logs. Analytics are anonymized by default and only collected if you enable them in settings.</p>
                    </div>

                    <div className="p-5 border-l-4 border-amber-500 bg-amber-500/5 rounded-r-xl">
                        <p className="text-amber-200 text-sm">
                            <strong className="block text-amber-400 mb-1">HIPAA / Regulatory responsibility:</strong> 
                            While we design the app with privacy in mind, compliance with HIPAA, GDPR, and other laws is the user's responsibility. If you operate in a jurisdiction that requires specific safeguards, do not transmit PHI to third-party services unless you have the necessary legal agreements and patient consent.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Use of Your Personal Data</h3>
                        <p className="mb-2">We may use Personal Data for purposes such as:</p>
                         <ul className="list-disc pl-6 space-y-1 marker:text-purple-500">
                            <li>Providing and maintaining the Service</li>
                            <li>Responding to support requests</li>
                            <li>Notifying you about important changes or security notices</li>
                            <li>Analyzing anonymous usage to improve features (only if enabled)</li>
                            <li>Processing AI requests you initiate (see AI Features section)</li>
                        </ul>
                    </div>
                </div>
            </section>

             {/* Rights & Security */}
             <section className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-red-500/20">
                        <Lock className="w-6 h-6 text-red-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Rights, Security & Retention</h2>
                </div>

                <div className="space-y-8 text-slate-400 leading-relaxed">
                    <div>
                         <h3 className="text-white font-semibold text-lg mb-2">Your Data Protection Rights</h3>
                         <p className="mb-2">You have rights regarding your Personal Data to the extent required by applicable law, including:</p>
                         <ul className="list-disc pl-6 space-y-2 marker:text-red-500">
                            <li><strong className="text-slate-200">Access:</strong> Request a copy of Personal Data we hold about you (support-related data only).</li>
                            <li><strong className="text-slate-200">Rectification:</strong> Ask us to correct inaccurate information.</li>
                            <li><strong className="text-slate-200">Erasure:</strong> Request deletion of Personal Data we control.</li>
                            <li><strong className="text-slate-200">Restriction & Objection:</strong> Request limits on processing or object where lawful.</li>
                            <li><strong className="text-slate-200">Portability:</strong> Request export of data we hold about you in machine-readable form.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Data Security</h3>
                        <div className="p-5 rounded-xl bg-white/5 mb-4">
                             <ul className="list-disc pl-4 space-y-2 marker:text-emerald-500">
                                <li>Local data is encrypted at rest and protected with OS-level storage controls.</li>
                                <li>We use secure network transmission (HTTPS/TLS) when communicating with our servers or third-party services.</li>
                                <li>We minimize data collection and retain data only as necessary.</li>
                                <li>Access to support logs or cloud backups requires your explicit action and consent.</li>
                            </ul>
                        </div>
                        <p>Although we use reasonable security measures, no system is perfectly secure. If a data breach affecting your data occurs, we will notify affected users and authorities as required by law.</p>
                    </div>

                    <div>
                         <h3 className="text-white font-semibold text-lg mb-2">User Responsibilities</h3>
                         <p className="mb-2">You are responsible for:</p>
                         <ul className="list-disc pl-6 space-y-1 marker:text-red-500">
                            <li>Securing your devices with strong passcodes/biometrics</li>
                            <li>Backing up data if desired (and understanding where backups are stored)</li>
                            <li>Not transmitting PHI to third-party services unless legally permitted</li>
                            <li>Keeping the app updated to receive security fixes</li>
                        </ul>
                    </div>

                     <div>
                         <h3 className="text-white font-semibold text-lg mb-2">Retention of Your Personal Data</h3>
                         <p>We retain Personal Data only as long as necessary for the purposes described (support, analytics if enabled, or legal obligations). Local medical data remains on your device until you delete it.</p>
                    </div>
                </div>
            </section>

             {/* Deletion & Other */}
             <section className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-slate-700/50">
                        <FileText className="w-6 h-6 text-slate-300" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Additional Information</h2>
                </div>

                <div className="space-y-8 text-slate-400 leading-relaxed">
                     <div>
                         <h3 className="text-white font-semibold text-lg mb-2">Delete Your Personal Data</h3>
                         <p className="mb-2">You have the right to delete personal data we hold. Ways to delete data:</p>
                         <ul className="list-disc pl-6 space-y-1 marker:text-slate-500">
                            <li>Use the in-app "Clear All Data" option to remove local templates, reports, and app settings.</li>
                            <li>Uninstalling the application will remove locally stored data from the device.</li>
                            <li>Delete individual templates or reports from the in-app interface.</li>
                            <li>If you need assistance or want us to delete support/account data we hold on our servers, contact us at <a href="mailto:contact.doctorsai@elpisverse.com" className="text-teal-400 hover:underline">contact.doctorsai@elpisverse.com</a>.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-2">Disclosure of Your Personal Data</h3>
                        <p className="mb-4"><strong className="text-slate-200">Business Transactions:</strong> If the Company is involved in a merger, acquisition, or sale, Personal Data may be transferred. We will notify you and provide choices when required by law.</p>
                        <p><strong className="text-slate-200">Law Enforcement:</strong> We may disclose Personal Data if required to comply with the law or respond to legitimate government requests. We will only disclose the minimum necessary and will challenge overly broad demands where appropriate.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-2">Children's Privacy</h3>
                            <p>Our Service is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe a child under 13 has provided us personal data, contact us so we can delete it.</p>
                        </div>
                         <div>
                            <h3 className="text-white font-semibold text-lg mb-2">Links to Third-Party Sites</h3>
                            <p>Our Service may contain links to third-party websites or services. We are not responsible for their privacy practices. Review their privacy policies before sharing information.</p>
                        </div>
                    </div>

                     <div>
                         <h3 className="text-white font-semibold text-lg mb-2">International Data Transfers</h3>
                         <p>Because local storage is the default, there are no routine international transfers of your medical data. If you use cloud or third-party features, data may be processed in other countries; we will inform you and obtain consent as required.</p>
                    </div>

                     <div>
                         <h3 className="text-white font-semibold text-lg mb-2">Changes to This Privacy Policy</h3>
                         <p>We may update this Privacy Policy from time to time. We will post the updated policy in the app and on this page and update the "Last updated" date. Where required by law, we will provide direct notice before changes take effect.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-teal-500/10 border border-teal-500/20 mt-8">
                         <div className="flex items-center gap-3 mb-2">
                            <Shield className="w-5 h-5 text-teal-400" />
                            <h3 className="text-white font-semibold text-lg">Your Consent</h3>
                         </div>
                         <p className="text-slate-300">By using our Service, you hereby consent to our Privacy Policy and agree to its terms. If you do not agree with this policy, please do not use our Service.</p>
                    </div>
                </div>
            </section>


            {/* Contact */}
            <section className="space-y-6 pt-12 border-t border-white/10">
                <h2 className="text-2xl font-bold text-white">Contact Us</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <a href="mailto:contact.doctorsai@elpisverse.com" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                           <Mail className="w-4 h-4 text-teal-400" /> General Inquiries / Privacy Requests
                        </h4>
                        <p className="text-slate-400 text-sm group-hover:text-teal-400 transition-colors">contact.doctorsai@elpisverse.com</p>
                    </a>
                    
                    <a href="mailto:contact.kingrittik@gmail.com" className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                        <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                           <Shield className="w-4 h-4 text-blue-400" /> Support & Security
                        </h4>
                        <p className="text-slate-400 text-sm group-hover:text-blue-400 transition-colors">contact.kingrittik@gmail.com</p>
                    </a>
                </div>
            </section>

        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
